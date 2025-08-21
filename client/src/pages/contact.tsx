import React, { useState } from 'react';
import { Link } from 'wouter';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary text-text font-mono">
      <nav className="fixed top-0 left-0 right-0 h-16 bg-secondary border-b border-border flex items-center justify-between px-8 z-50">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-text hover:text-text-muted transition-colors">
            ← BACK
          </Link>
          <Link href="/" className="text-lg font-normal tracking-wider">
            COLOMBE BLANK
          </Link>
        </div>
      </nav>

      <main className="pt-16 px-8 py-16 max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl mb-4">CONTACT US</h1>
          <p className="text-text-muted">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl mb-8">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 border border-border bg-green-50 text-green-800">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-8 p-4 border border-border bg-red-50 text-red-800">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-border bg-secondary focus:outline-none focus:border-primary"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-border bg-secondary focus:outline-none focus:border-primary"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-border bg-secondary focus:outline-none focus:border-primary"
                  data-testid="input-subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full p-4 border border-border bg-secondary focus:outline-none focus:border-primary resize-vertical"
                  data-testid="textarea-message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-secondary py-4 hover:opacity-80 transition-opacity disabled:opacity-50"
                data-testid="button-submit"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg mb-4">Visit Our Store</h3>
                <div className="text-text-muted space-y-2">
                  <p>123 Fashion Avenue</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg mb-4">Phone</h3>
                <div className="text-text-muted space-y-2">
                  <p>+1 (555) 123-4567</p>
                  <p className="text-sm">Mon-Fri: 9AM-6PM EST</p>
                  <p className="text-sm">Sat: 10AM-4PM EST</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg mb-4">Email</h3>
                <div className="text-text-muted space-y-2">
                  <p>General: info@colombeblank.com</p>
                  <p>Support: support@colombeblank.com</p>
                  <p>Press: press@colombeblank.com</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg mb-4">Business Hours</h3>
                <div className="text-text-muted space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-64 border border-border bg-hover flex items-center justify-center">
              <p className="text-text-muted">Interactive Map</p>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <section className="mt-16">
          <h2 className="text-2xl mb-8 text-center">Other Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-border text-center">
              <h3 className="text-lg mb-4">Live Chat</h3>
              <p className="text-text-muted mb-4">
                Chat with our team in real-time for immediate assistance.
              </p>
              <button className="border border-border px-6 py-2 hover:bg-hover transition-colors">
                START CHAT
              </button>
            </div>
            
            <div className="p-6 border border-border text-center">
              <h3 className="text-lg mb-4">FAQ</h3>
              <p className="text-text-muted mb-4">
                Find quick answers to commonly asked questions.
              </p>
              <Link
                href="/faq"
                className="inline-block border border-border px-6 py-2 hover:bg-hover transition-colors"
              >
                VIEW FAQ
              </Link>
            </div>

            <div className="p-6 border border-border text-center">
              <h3 className="text-lg mb-4">Support Center</h3>
              <p className="text-text-muted mb-4">
                Access our comprehensive support resources.
              </p>
              <Link
                href="/support"
                className="inline-block border border-border px-6 py-2 hover:bg-hover transition-colors"
              >
                GET SUPPORT
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}