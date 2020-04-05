rm index.html
touch index.html
curl "http://newsapi.org/v2/everything?q=covid19&from=2020-04-04&to=2020-04-04&sortBy=popularity&apiKey=6e01631cc8db4df88d26ca0003428d77" > index.html
