# E-Commerce Project

## Project Description

This e-commerce project is designed to explore the integration of content management systems (CMS) with front-end frameworks. The aim is to develop a comprehensive understanding of connecting a CMS with a dynamic front-end for an e-commerce platform.

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - SCSS
  - JavaScript
  - React
  - Redux
  - Redux Toolkit
  - Axios
- **Backend:**
  - Strapi (incorporating Node.js, Express, and SQLite)
- **Payment Processing:**
  - Stripe

## Features

- Browse products and categories
- Add items to cart
- Process orders
- User registration (currently supports registration without login capability; users can add items to the cart and complete payments via Stripe without being logged in)

## Installation and Setup

### Frontend

1. Navigate to the `client` folder:
   ```bash
   cd client
   ```

This is a small E-commerce web application using react,redux and Strapi as CMS

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
