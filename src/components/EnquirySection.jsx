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
            setTimeout(() => setStatus('idle'), 4000);
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <div className={styles.enquiryWrapper}>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="Your Name"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="Your Email"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className={styles.textarea}
                            placeholder="Tell me about your project..."
                            rows={4}
                        />
                    </div>
                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={status === 'submitting'}
                    >
                        <span className={styles.btnText}>
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </span>
                    </button>

                    <div className={`${styles.statusMessage} ${status === 'success' ? styles.showSuccess : ''} ${status === 'error' ? styles.showError : ''}`}>
                        {status === 'success' && 'Your message has been received!'}
                        {status === 'error' && 'Failed to send message. Please try again.'}
                    </div>
                </form>
            </div>
        </div>
    );
}
