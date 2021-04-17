const path = require("path");
const express = require("express");
const transporter = require("./config");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMPAPIKEYS,
  server: process.env.SERVERPREFIX,
});

const buildPath = path.join(__dirname, "client/build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/send", async (req, res) => {
  // res.send(req.body);

  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.email, // list of receivers
      subject:
        req.body.firstname +
        " " +
        req.body.lastname +
        " needs " +
        req.body.selectedOption, // Subject line
      text: "Here is my phone number " + req.body.phone,
      html: req.body.message, // plain text body
    };

    const subscribingUser = {
      email: req.body.email,
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      phone: req.body.phone,
      webType: req.body.selectedOption,
      message: req.body.message,
    };

    const listId = process.env.MAILCHIMPLISTID;
    const subResponse = await mailchimp.lists.addListMember(listId, {
      email_address: subscribingUser.email,
      status: "subscribed",
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName,
        PHONE: subscribingUser.phone,
        WEBTYPE: subscribingUser.webType,
        MESSAGE: subscribingUser.message,
      },
    });
    const mailSent = await transporter.sendMail(mailOptions);

    console.log(subResponse, mailSent);
    if (subResponse.id !== null || mailSent.response !== null) {
      res.send({
        success: true,
        message: "Thanks for contacting us. We will get back to you shortly",
      });
    } else {
      res.status(500).send({
        success: false,
        message: "Something went wrong. Try again later",
      });
    }
    // console.log(subResponse, mailSent);
    // transporter.sendMail(mailOptions, async function (err, info) {
    //   if (err) {
    //     res.status(500).send({
    //       success: false,
    //       message: "Something went wrong. Try again later",
    //     });
    //   } else {
    //     res.send({
    //       success: true,
    //       message: "Thanks for contacting us. We will get back to you shortly",
    //     });
    //   }
    // });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong. Try again later",
    });
  }
});

app.listen(PORT, () => {
  console.log("server start on port 3030");
});
