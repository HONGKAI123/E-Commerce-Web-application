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
    const { products } = ctx.request.body; //client will send a post request with products inside body

    console.log("Products is undefined:", ctx.request.body);

    const lineItems = await Promise.all(
      //send lineItems so checkout page will show those information
      //for each item send from frontend, we want to search it on backend
      products.map(async (product) => {
        const item = await strapi
          .service("api::product.product")
          .findOne(product.id);
        console.log(item);
        const imgUrl = product.img
          ? [
              `https://images.pexels.com/photos/15587225/pexels-photo-15587225/free-photo-of-low-angle-shot-of-woman-wearing-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
              "https://images.pexels.com/photos/19479545/pexels-photo-19479545/free-photo-of-a-woman-in-jeans-and-a-leather-jacket-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ]
          : [];
        return {
          price_data: {
            //prevent user modify price from client side
            currency: "usd",
            product_data: {
              //Data used to generate a new product object inline.
              name: item.title,
              images: imgUrl,
            },
            unit_amount: item.price * 100, //stripe takes amount as cent
          },
          quantity: product.quantity, //get from frontend redux store, use product.quantity
        };
      })
    );

    console.log(lineItems[0].price_data.product_data);
    try {
      const session = await stripe.checkout.sessions.create({
        // line_items: [
        //   {
        //     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        //     price: "{{PRICE_ID}}",
        //     quantity: 1,
        //   },
        // ],
        mode: "payment",
        success_url: `${process.env.SUCCESS_PAYMENT}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?success=false`,
        line_items: lineItems,
        shipping_address_collection: { allowed_countries: ["US"] },
        payment_method_types: ["card"],
      });
      await strapi.service("api::order.order").create({
        data: { products, stripeId: session.id },
      });
      return { stripeSession: session };
    } catch (err) {
      ctx.response.status = 500;
      console.log(err);
      return { err };
    }
  },
}));
