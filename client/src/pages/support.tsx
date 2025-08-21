import React, { useState } from 'react';
import { Link } from 'wouter';

export default function Support() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    category: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Support request submitted successfully!');
    setFormData({
      name: '',
      email: '',
      orderNumber: '',
      category: '',
      subject: '',
      message: ''
    });
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

      <main className="pt-16 px-8 py-16 max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl mb-4">CUSTOMER SUPPORT</h1>
          <p className="text-text-muted">We're here to help with any questions or concerns you may have.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Support Form */}
          <div>
            <h2 className="text-2xl mb-8">Contact Support</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Full Name *
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
                  Email Address *
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
                <label htmlFor="orderNumber" className="block text-sm mb-2">
                  Order Number (if applicable)
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  name="orderNumber"
                  value={formData.orderNumber}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-border bg-secondary focus:outline-none focus:border-primary"
                  data-testid="input-order-number"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-border bg-secondary focus:outline-none focus:border-primary"
                  data-testid="select-category"
                >
                  <option value="">Select Category</option>
                  <option value="order-inquiry">Order Inquiry</option>
                  <option value="product-question">Product Question</option>
                  <option value="return-exchange">Return/Exchange</option>
                  <option value="shipping">Shipping Issue</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
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
                className="w-full bg-primary text-secondary py-4 hover:opacity-80 transition-opacity"
                data-testid="button-submit"
              >
                SUBMIT REQUEST
              </button>
            </form>
          </div>

          {/* Support Information */}
          <div>
            <h2 className="text-2xl mb-8">Other Ways to Reach Us</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg mb-4">Email Support</h3>
                <p className="text-text-muted mb-2">support@colombeblank.com</p>
                <p className="text-sm text-text-muted">Response time: Within 24 hours</p>
              </div>

              <div>
                <h3 className="text-lg mb-4">Phone Support</h3>
                <p className="text-text-muted mb-2">+1 (555) 123-4567</p>
                <p className="text-sm text-text-muted">
                  Mon-Fri: 9AM-6PM EST<br />
                  Weekend support available for urgent matters
                </p>
              </div>

              <div>
                <h3 className="text-lg mb-4">Live Chat</h3>
                <p className="text-text-muted mb-2">Available on our website</p>
                <p className="text-sm text-text-muted">Mon-Fri: 9AM-6PM EST</p>
              </div>

              <div>
                <h3 className="text-lg mb-4">Order Status</h3>
                <p className="text-text-muted mb-4">
                  Check your order status and tracking information online
                </p>
                <button className="border border-border px-6 py-2 hover:bg-hover transition-colors">
                  TRACK ORDER
                </button>
              </div>
            </div>

            <div className="mt-12 p-6 border border-border">
              <h3 className="text-lg mb-4">Quick Links</h3>
              <div className="grid grid-cols-1 gap-2">
                <Link href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</Link>
                <Link href="/shipping" className="text-text-muted hover:text-text transition-colors">Shipping Information</Link>
                <Link href="/returns" className="text-text-muted hover:text-text transition-colors">Return Policy</Link>
                <Link href="/size-guide" className="text-text-muted hover:text-text transition-colors">Size Guide</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}