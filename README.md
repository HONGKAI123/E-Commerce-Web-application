# E-Commerce Project

## Project Description

This e-commerce project is designed to explore the integration of content management systems (CMS) with front-end frameworks. The aim is to develop a comprehensive understanding of connecting a CMS with a dynamic front-end for an e-commerce platform.

## Technologies Used

- **Frontend:**
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
  ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
  ![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white)
  ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node-dot-js&logoColor=white)
  ![SQLite](https://img.shields.io/badge/SQLite-07405E?style=flat&logo=sqlite&logoColor=white)
  ![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=flat&logo=stripe&logoColor=white)
  ![Axios]

  - Axios

- **Backend:**
  - Strapi (incorporating Node.js, Express, and SQLite)
- **Payment Processing:**
  - Stripe

## Main Features

- Browse products and categories
- Dynamic price filter
- Add items to cart
- Process orders
- User registration (currently supports registration without login capability; users can add items to the cart and complete payments via Stripe without being logged in)

## Installation and Setup

### Frontend

1. Navigate to the `client` folder:
   ```bash
   cd client
   ```
2. Install dependencies and start the React app:

```bash
  npm install
  npm start
```

### Backend Server

1. Navigate to the server folder:

```bash
  cd server
```

2. Start the Strapi:

```bash
 npm run develop
```

## DataBase

The project utilizes SQLite for database management. This setup allows for straightforward manual data entry and efficient data retrieval, aligning with the needs of the e-commerce platform. If you need a structural diagram of the database or diagrams illustrating the frontend and backend architecture, please let me know, and I can provide more details or visuals.

//Category
title
description
img
relation: products N to N

//product
title
description
img1
img2
price
isNew
relation: 1. categories N to N 2. subCategories N to N

//aviod lose item on shopping cart- redux-persit library store shopping cart information on clieng (sessionStorage for shopping cart )
// 待做： 添加购物车增减数量功能 完成
添加支付页面显示购买商品图片功能
