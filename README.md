# Mailgun: Single Click Unusbscribe link 
Test project to send  List-Unsubscribe header in email through mail-gun and Nodemailer

Steps to run this project
- run `yarn insatll` or `npm install`
- Provide your mailgun apiKey at line number `5` of file `app.js`
- provide your domain at line number `6` of file `app.js`
- provide `from` and `to` email address based on your domain at line `9` & `10` respectively
- run `node app.js`  

It will send a test/sample email wih list unsubscribe header using nodemailer as mime mail composer

More info 
- Nodemail list unsubscribe reference: [here](https://nodemailer.com/message/list-headers/) 
- More about single click unsibscribe: [here](https://support.google.com/mail/answer/81126),  search `one-click unsubscribe`
