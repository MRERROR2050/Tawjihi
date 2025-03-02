const { createTransport } = require("nodemailer");
const path = require("path");
const hbs = require("nodemailer-express-handlebars");
require("dotenv").config();
module.exports = async (to, password, name, subject, template) => {
  try {
    const transporter = createTransport({
      host: process.env.HOST,

      port: 587,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
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
        address: process.env.EMAIL,
      },
      to: to,
      subject: subject,
      template: template,
      context: {
        name,
        password,
      },
    };
    return transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

//parameter
