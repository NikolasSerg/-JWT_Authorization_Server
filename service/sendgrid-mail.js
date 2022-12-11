const client = require('@sendgrid/mail')
client.setApiKey(process.env.SENDGRID_API_KEY)

const SendGridMailService = {
    async sendMail(msg) {
        console.log(msg, 'msg ************************************************************************** 111 ')
            client.send(msg)
            .then(result => {
                console.log(result, ' result ---------------------------------------------- 9')
                console.log('Message send successfully');
            })
            .catch(error => {
                console.log(error, 'error -------------------------------------- 12');
                console.error(error, 'error sending mail');
            })
    },

    async sendActivationMail(to, link) {
        const msg = {
            to,
            // from: process.env.SMTP_USER,
            from: 'nikolasalon@gmail.com',
            subject: 'Activation account on ' + process.env.API_URL,
            text: 'HI',
            // html: 
            // `
            //     <div>
            //         <h1>For activation go to link</h1>
            //         <a href="${link}">${link}</a>
            //     </div>
            // `
        }
        await this.sendMail(msg)
    }
}

module.exports = SendGridMailService