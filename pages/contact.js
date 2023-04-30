import { useRef } from 'react';
import { zillaSlab } from '@/utils/fonts';
import styles from '../styles/Contact.module.scss'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] =useState('');
    const [response, setResponse] = useState('');
 
    const form = useRef(); 

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Sending')
       
        
        emailjs.sendForm('service_eek62sq','template_dwt3cp2', form.current, '3fYt6b_rKsQ3P-_eS')
      .then((result) => {
          console.log(result.text);
          console.log('Response succeeded!')
              setName('')
              setEmail('')
              setMessage('')
          setResponse("Thank you! Talk to you soon!")
      }, (error) => {
          console.log(error.text);
          setError("Sorry there was an error please attempt again or call 937-524-3332")
      });


   /* Code for NodeMailer with contact API     
        let data = {
            name,
            email,
            message
        }
       fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true)
              setName('')
              setEmail('')
              setMessage('')
              setResponse("Thank you! Talk to you soon!")
            } else {
                setError("Sorry there was an error please attempt again or call 937-524-3332")
            }
         })
         */
    }

    return (
        <main className={zillaSlab.className}>
            <h2 className={styles.h2}>Contact</h2>
                <h3 className={styles.h3}>{response}</h3>
                <p className={styles.p}>{error}</p>
                < form ref={form} className={styles.main} onSubmit={(e)=>{handleSubmit(e)}}  >
                < div className={styles.inputGroup} >
                    < label htmlFor='name' className={styles.inputLabel}>Name</label>
                    < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' value={name} className={styles.inputField} />  
                </div>
                <div className={styles.inputGroup} >
                    < label htmlFor='email' className={styles.inputLabel}>Email</label>
                    < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' value={email} className={styles.inputField} />
                </div>
                <div className={styles.inputGroup} >
                    < label htmlFor='message' className={styles.inputLabel}>Message</label>
                    < textarea type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' value={message} className={styles.inputMessage} />
                </div>
                < button type='submit' className={styles.button}>Send</button>
                </form>
        </main>
    )
}

export default Contact;