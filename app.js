var Mailgun = require("mailgun-js");
var MailComposer = require("nodemailer/lib/mail-composer");

const gun = Mailgun({
  apiKey: "your-mail-gun-api-key",
  domain: "your-domain"
});

const fromEmailAddress = "harsh@mycomp.com";
const toEmailAddress = "harsh@mycomp.com";

var mailOptions = {
  from: fromEmailAddress,
  to: toEmailAddress,
  subject: "Test unsubscribe header MIME",
  text: "Testing some Mailgun awesomeness!",
  list: {
    unsubscribe: { url: "http://mycomp.com/unsubscribe-harsh/here" }
  }
};

var mail = new MailComposer(mailOptions);
mail.compile().build(function (mailBuildError, message) {
  var dataToSend = {
    to: toEmailAddress,
    message: message.toString("ascii")
  };
  gun.messages().sendMime(dataToSend, function (sendError, body) {
    if (sendError) {
      console.log(sendError);
      return;
    }
    console.log(body);
  });
});
