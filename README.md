<h1 align="center">Leboncoin frontend</h1>

<p align="center">
  <img width="500" src="https://github.com/LilaGuill/leboncoin-frontend/blob/master/public/screen.png" alt="capture-1">
</p>

<p align="center">
  Demo:<a href="https://leboncoin-frontend.netlify.com/" target="_blank"> https://leboncoin-frontend.netlify.com/</a>
</p>
<p align="center">
 This project was bootstrapped with <a href=https://github.com/facebook/create-react-app. target="_blank">Create React App</a>
</p>

## Overview

**Web application, full-stack project**

**Functionalities**

- Fetch offers : axios request from Api https://github.com/LilaGuill/leboncoin-backend.git
- Authentication :
  - signup : create an account saved in mongoDB database
  - signin : verify in mongoDB database if the account is already register
  - cookies : set or remove token from cookies
- Create an offer : create the new offer in mongoDB Database, save de picture with Cloudinary
- Get detail of one offer : axios request from Api
- Buy the article whith Stripe (dev environment) :
  - crédit card number to use for demo : 4242 4242 4242 4242
  - expiration must be in the futur
  - crypto use number only
  - code postal use number only

**UI**

- Homemade UI without framework

**Dependencies**

## Running the project

Clone this repository :

```
git clone https://github.com/LilaGuill/leboncoin-frontend.git
cd leboncoin-frontend
```

Install packages :

```
npm install
```

When installation is complete, run the project with:

```
npm start
```

## Client

- Hooks (useState, useEffect)
- HTTP request with axios (get, post)
- Routing with react-router-dom
- Payment with react-stripe-element
- Handle cookies whith js-cookies

## Server

- Express
- Express-formidable
- Mongoose
- Crypto-js
- Uid2
- Stripe
- Cors
- Dotenv

## Leboncoin backend

<a href="https://github.com/LilaGuill/leboncoin-backend.git">https://github.com/LilaGuill/leboncoin-backend.git</a>

## Deployment

- Client deployed with Netlify
- Server deployed with Heroku
- MongoDb database hosted on Mlab

## Contact

<a href="https://www.linkedin.com/in/lila-guillermic-66542476/" target="_blank">My Linkedin Profil</a>
