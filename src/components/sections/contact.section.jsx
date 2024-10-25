import { useState, useRef } from 'react';
// import { createTransport } from 'nodemailer';
import emailjs from 'emailjs-com';
emailjs.init({
    publicKey: 'JTKyDK0bpI8gOckcw',
    privateKey: 'hocifTRbEm0AsqtQeIElA',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
        // Block the suspended emails
        list: ['foo@emailjs.com', 'bar@emailjs.com'],
        // The variable contains the email address
        watchVariable: 'user_email',
    },
    limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 10000,
    },
});

// var email_user = "anonymusss279@gmail.com";

// const transporter = createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//         user: email_user,
//         pass: "efpy phah isum zzlz",
//     }
// });

const ContactSection = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_message: ''
    });

    const form = useRef(null);

    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
 
        try {
            console.log(form.current);
            // emailjs.sendForm('service_v5gu8yl', 'template_b4naoow', form.current, {
                // {
                //     publicKey: 'hqA9uw2QtSbIML0Jn', 
                //     privateKey: '4L9yIOT3AO2czbWCkYuKo'

                // })
            emailjs.send('service_v5gu8yl', 'template_b4naoow', formData)
                .then(
                    (res) => {
                        console.log('SUCCESS!', res.status, res.text);
                        setStatus('success');
                        setFormData({ user_name: '', user_email: '', user_message: '' });
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setStatus('error');
                    },
                );


            // const response = await fetch('http://localhost:3000/send-email', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData),
            // });

    //         const mailOptions = {
    //             from: email_user,
    //             to: formData.email,
    //             subject: '¡Gracias por contactar a Ready Go!',
    //             html: `
    //   <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    //     <h1 style="color: #3B82F6; text-align: center;">¡Hola ${formData.name}!</h1>
        
    //     <p style="font-size: 16px; line-height: 1.5; color: #333;">
    //       Gracias por contactar a Ready Go. Hemos recibido tu mensaje:
    //     </p>
        
    //     <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    //       <p style="color: #666; font-style: italic;">${formData.message}</p>
    //     </div>
        
    //     <p style="font-size: 16px; line-height: 1.5; color: #333;">
    //       Nuestro equipo revisará tu solicitud y te responderemos a la brevedad posible.
    //     </p>
        
    //     <div style="text-align: center; margin-top: 30px;">
    //       <p style="color: #666; font-size: 14px;">
    //         Ready Go - Transformando Ideas en Realidad Digital
    //       </p>
    //     </div>
    //   </div>
    // `
    //         };

            // let info = await transporter.sendMail(mailOptions);

            // console.log("Email sent: ", info.response);
            // console.log("mensagge sent: ", info.messageId);

            // if (info?.messageId) {
            //     setStatus('success');
            //     setFormData({ name: '', email: '', message: '' });
            // } else {
            //     setStatus('error');
            // }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-20 bg-secondary" id="contacto">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Contáctenos</h2>
                <div className="bg-primary p-8 rounded-xl">
                    <form onSubmit={handleSubmit} className="space-y-6 text-center" ref={form}>
                        <div>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Nombre"
                                value={formData.user_name}
                                onChange={handleChange}
                                className="form-input w-full p-3 rounded-lg bg-secondary border border-gray-700 focus:border-accent focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Email"
                                value={formData.user_email}
                                onChange={handleChange}
                                className="form-input w-full p-3 rounded-lg bg-secondary border border-gray-700 focus:border-accent focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="user_message"
                                placeholder="Mensaje"
                                value={formData.user_message}
                                onChange={handleChange}
                                rows="3"
                                className="form-textarea w-full p-3 rounded-lg bg-secondary border border-gray-700 focus:border-accent focus:outline-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-max text-center bg-accent hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                        {status === 'success' && (
                            <p className="text-green-500 text-center">¡Mensaje enviado con éxito!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-500 text-center">Error al enviar el mensaje. Por favor, intenta nuevamente.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
