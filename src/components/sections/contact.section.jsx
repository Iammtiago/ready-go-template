import { useState } from 'react';
import Swal from 'sweetalert2'

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
        name: '',
        email: '',
        message: ''
    });


    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        
        try {
    
            const formData = new FormData(e.target);
    
            // formData.append("access_key", "8a0f3d19-465e-49fc-9602-e7ebf7cc5f8b"); // tiagoddd279@gmail.com
            formData.append("access_key", "bc0a7ce1-dda1-4ba3-bf6c-dfc54bf611ba"); //santiagoAndres79@outlook.es

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
    
            const data = await response.json();
    
            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                e.target.reset();
                Swal.fire({
                    title: "Correo enviado!",
                    text: "¡Mensaje enviado con éxito!",
                    showCloseButton: true,
                    icon: "success"
                });
            } else {
                console.log("Error", data);
                console.log("Error.message", data.message);
                setStatus('error');
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    showCloseButton: true,
                    text: "Error al enviar el mensaje. Por favor, intenta nuevamente."
                    // footer: '<a href="#">Why do I have this issue?</a>'
                });
            }

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


        } catch (err) {
            console.error(err);
            setStatus('error');
            Swal.fire({
                icon: "error",
                title: "Error",
                showCloseButton: true,
                text: "Error al enviar el mensaje. Por favor, intenta nuevamente."
                // footer: '<a href="#">Why do I have this issue?</a>'
            });
        }

        
        setTimeout(() => setStatus(''), 4000)
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
                    <form onSubmit={handleSubmit} className="space-y-6 text-center">
                        <div className='text-left'>
                            <label className="pl-3 text-lg text-pretty font-semibold">Nombre completo</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input w-full p-3 mt-2 rounded-lg bg-secondary border border-gray-700 focus:border-accent focus:outline-none"
                                required
                            />
                        </div>
                        <div className='text-left'>
                            <label className="pl-3 text-lg text-pretty font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input w-full p-3 mt-2 rounded-lg bg-secondary border border-gray-700 focus:border-accent focus:outline-none"
                                required
                            />
                        </div>
                        <div className='text-left'>
                            <label className="pl-3 text-lg text-pretty font-semibold">Mensaje</label>
                            <textarea
                                name="message"
                                placeholder="Mensaje"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                className="form-textarea w-full p-3 mt-2 rounded-lg bg-secondary border border-gray-700 focus:border-accent focus:outline-none resize-none min-h-[120px] max-h-[150px]"
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
