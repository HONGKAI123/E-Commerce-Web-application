const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  //{strapi} destructing strapi object so we can do CRUD aciton
  //when client sent http request to server, we will trigger create function to create something into db
  //and then send something back to client
  async create(ctx) {
    const { email, products } = ctx.request.body; //client will send a post request with products inside body
    const lineItems = await Promise.all(
      //send lineItems so checkout page will show those information
      //for each item send from frontend, we want to search it on backend
      products.map(async (product) => {
        const item = await strapi
          .service("api::product.product")
          .findOne(product.id);
        return {
          price_data: {
            //prevent user modify price from client side
            currency: "usd",
            product_data: {
              //Data used to generate a new product object inline.
              name: item.title,
            },
            unit_amount: item.price * 100, //stripe takes amount as cent
            quantity: item.quantity,
          },
        };
      })
    );
    try {
      const session = stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "{{PRICE_ID}}",
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?success=false`,
        line_items: lineItems,
      });
    } catch (err) {
      ctx.response.status = 500;
      return err;
    }
  },
}));
