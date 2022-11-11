import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "karin@oopssilver.se", // Your email where you'll receive emails
      from: "karin@oopssilver.se", // your website email address here
      subject: `${req.body.model}`,
      html: `<div>Beställning</div>
      
      Namn: ${req.body.fullname} <br>
      Mailadress: ${req.body.email} <br>
      Adress: ${req.body.adress} <br>
      Model: ${req.body.model} <br>
      Färgval: ${req.body.color} <br>
      Mått och storlek: ${req.body.size} <br>
      Meddelande: ${req.body.message} <br>    
    `,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
