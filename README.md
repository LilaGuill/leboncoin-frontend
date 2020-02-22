<h1 align="center">Leboncoin clone</h1>

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

- Fetch offers: axios get request from Api
- Authentication :
  *signup : create an account saved in mongoDB database
  *signin : verify in mongoDB database if the account is already register
  \*cookies: set or remove token from cookies

- Create an offer : create the new offer in mongoDB Database, and save de picture with Cloudinary
- Get detail of one offer : axios post request from Api
- Buy the article whith Stripe (dev environement):
  - crédit card number to use form demo : 4242 4242 4242 4242
  - expiration must be in the futur
  - crypto use digit only
  - code postal use digit only
- Routing with react-router-dom

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

- HTTP request with axios (Get, Post)
- Hooks (useState, useEffect)

## Server

- Express
- Express-formidable
- Mongoose

## Leboncoin API

<a href="https://github.com/LilaGuill/leboncoin">https://github.com/LilaGuill/leboncoin</a>

## Deployment

- Client deployed with Netlify
- Server deployed with Heroku
- MongoDb database hosted on Mlab

## Contact

<a href="https://www.linkedin.com/in/lila-guillermic-66542476/" target="_blank">My Linkedin Profil</a>
