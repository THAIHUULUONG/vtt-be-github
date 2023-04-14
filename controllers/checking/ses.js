const nodemailer = require('nodemailer');

const sendEmail = async (req, res, countCheck) => {
    const smtpEndpoint = process.env.SES_AWS_SMTP_ENDPOINT; // tên server mình sẽ chỉ cách lấy bên dưới
    const port = parseInt(process.env.SES_AWS_SMTP_PORT ?? '587', 10);
    const senderAddress = process.env.SES_AWS_SMTP_SENDER; // email dùng để gửi đi2587
    const toAddresses = process.env.SES_AWS_SMTP_TO; // email dùng để gửi đi2587
    const smtpUsername = process.env.SES_AWS_SMTP_USERNAME; // smtp username mà bạn đã download ở trên 
    const smtpPassword = process.env.SES_AWS_SMTP_PASSWORD; // smtp password mà bạn đã download ở trên 

    const transporter = nodemailer.createTransport({
        host: smtpEndpoint,
        port: port,
        auth: {
          user: smtpUsername,
          pass: smtpPassword
        }
      });
    
      let mailOptions = {
        from: senderAddress,
        to: toAddresses,
        subject: `KẾT QUẢ - BMTI VTTU - ${req?.body?.name}`,
        // text: `Chao ${req?.body?.name}`,
        html:`
        <h1> Họ và tên -- ${req?.body?.name}<h1/>
        <h1> Email -- ${req?.body?.email}<h1/>
        <h1> Số điện thoại ${req?.body?.phone}<h1/>
        <h1> Kết quả  ${req?.body?.resultCheck}<h1/>
        <h1> Tổng số lượng  ${countCheck}<h1/>
        `
      };

    const info = await transporter.sendMail(mailOptions); // bắt đầu gởi mail  
}

module.exports = sendEmail;