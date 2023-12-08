# Small E-Commerce Web application

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
// 待做： 添加购物车增减数量功能
