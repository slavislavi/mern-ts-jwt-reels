import nodemailer, { SentMessageInfo } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

class MailService {
  transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });
  }

  async sendActivationMail(to: string, link: string): Promise<SentMessageInfo> {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Account Activation on website ' + process.env.API_URL,
      text: '',
      html: `
          <div>
            <h1>Follow this link to activate your account: </h1>
            <a href="${link}">${link}</a>
          </div>
        `,
    });
  }
}

export default new MailService();
