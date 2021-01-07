**Shopify frontend challenge**

This project was created for UX Developer Intern & Web Developer Intern Challenge - Summer 2021, check more [here](https://docs.google.com/document/d/e/2PACX-1vSu41mbON8qXlkyg2dIzvmuQzKXPL11aznn0-javSbmOAwN81fsf_ra9CA2-Xq2KhdC61NJMBqt2ZFv/pub).

**How to run the app**

Please make sure to create an account in mongodb and create a `.env` file in the server directory. Your `.env` file should look like this

    API_PORT=8900 (if you change this port, change the .env in client too)
    DB_URI=mongodb+srv://<yourname>:<yourpassword>@cluster0.87oma.mongodb.net/movienominate?retryWrites=true&w=majority

`.env` is provided for the client as it's public api anyway.

Then please: 

run `npm start` in `client` folder
run `npm run dev` in `server` folder

**Live Demo**

[Click Here](https://shopify-challenge-01.netlify.app/) for the demo.
