const { createTransport } = require("nodemailer");
const path = require("path");
const hbs = require ('nodemailer-express-handlebars')
module.exports = async (to, link, name, subject, template) => {
  try {
    const transporter = createTransport({
      host: "smtp-relay.brevo.com",
      

      port: 587,
      auth: {
        user: "7f1360001@smtp-brevo.com",
        pass: "WKdcmyfxMv2UT0LX",
      },
    });


    // using custom email template with nodemailer express handler
    const handlebarsOptions = {
      viewEngine: {
        extname: ".handlebars",
        partialsDir: path.resolve("./views"),
        defaultLayout: false,
      },
      viewPath: path.resolve("./views"),
      extName: ".handlebars",
    };

    transporter.use("compile", hbs(handlebarsOptions));

    const mailOptions = {
      from: {
        name: "السفر الى ايطاليا",
        address: "abdalfatah.aljuaidi@gmail.com",
      },
      to: to,
      subject: subject,
      template: template,
      context: {
        name,
      },
    };
    return transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};




//parameter

