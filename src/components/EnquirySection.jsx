'use client';

import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import styles from './EnquirySection.module.css';

export default function EnquirySection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setStatus('submitting');
        try {
            await addDoc(collection(db, "enquiries"), {
                ...formData,
                timestamp: serverTimestamp()
            });
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <div className={styles.enquiryWrapper}>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    <div className={styles.inputGroup}>
                        <label htmlFor="enquiry-name" className={styles.label}>Your Name</label>
                        <input
                            id="enquiry-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            className={styles.input}
                            placeholder="John Doe"
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <label htmlFor="enquiry-email" className={styles.label}>Your Email</label>
                        <input
                            id="enquiry-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            className={styles.input}
                            placeholder="john@example.com"
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <label htmlFor="enquiry-message" className={styles.label}>Project Details</label>
                        <textarea
                            id="enquiry-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            className={styles.textarea}
                            placeholder="Tell me about your project..."
                            rows={4}
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={status === 'submitting'}
                        aria-disabled={status === 'submitting'}
                    >
                        <span className={styles.btnText}>
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </span>
                    </button>

                    <div 
                        aria-live="polite" 
                        className={`${styles.statusMessage} ${status === 'success' ? styles.showSuccess : ''} ${status === 'error' ? styles.showError : ''}`}
                    >
                        {status === 'success' && '✅ Your message has been received!'}
                        {status === 'error' && '❌ Failed to send message. Please try again.'}
                    </div>
                </form>
            </div>
        </div>
    );
}
