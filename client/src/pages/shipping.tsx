import React from 'react';
import { Link } from 'wouter';

export default function Shipping() {
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
          <h1 className="text-4xl mb-4">SHIPPING INFORMATION</h1>
          <p className="text-text-muted">Everything you need to know about our shipping policies and options.</p>
        </header>

        <div className="space-y-16">
          {/* Shipping Options */}
          <section>
            <h2 className="text-2xl mb-8">Shipping Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Standard Shipping</h3>
                <div className="space-y-2 text-text-muted">
                  <p><strong>Delivery Time:</strong> 3-5 business days</p>
                  <p><strong>Cost:</strong> $8.95</p>
                  <p><strong>Free shipping on orders over $200</strong></p>
                </div>
              </div>
              
              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Express Shipping</h3>
                <div className="space-y-2 text-text-muted">
                  <p><strong>Delivery Time:</strong> 1-2 business days</p>
                  <p><strong>Cost:</strong> $24.95</p>
                  <p><strong>Order by 2PM EST for same-day processing</strong></p>
                </div>
              </div>

              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Overnight Shipping</h3>
                <div className="space-y-2 text-text-muted">
                  <p><strong>Delivery Time:</strong> Next business day</p>
                  <p><strong>Cost:</strong> $39.95</p>
                  <p><strong>Order by 12PM EST for same-day processing</strong></p>
                </div>
              </div>

              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">International Shipping</h3>
                <div className="space-y-2 text-text-muted">
                  <p><strong>Delivery Time:</strong> 7-14 business days</p>
                  <p><strong>Cost:</strong> Calculated at checkout</p>
                  <p><strong>Duties and taxes may apply</strong></p>
                </div>
              </div>
            </div>
          </section>

          {/* Processing Time */}
          <section>
            <h2 className="text-2xl mb-8">Order Processing</h2>
            <div className="p-6 border border-border">
              <div className="space-y-4 text-text-muted">
                <p>
                  Orders are processed Monday through Friday, excluding holidays. 
                  All orders placed before 2PM EST will be processed the same business day.
                </p>
                <p>
                  Orders placed after 2PM EST or on weekends will be processed the next business day.
                </p>
                <p>
                  You will receive a confirmation email with tracking information once your order ships.
                </p>
              </div>
            </div>
          </section>

          {/* Shipping Destinations */}
          <section>
            <h2 className="text-2xl mb-8">Shipping Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg mb-4">Domestic Shipping</h3>
                <div className="text-text-muted">
                  <p className="mb-4">We ship to all 50 United States, including:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Alaska and Hawaii</li>
                    <li>APO/FPO addresses</li>
                    <li>Puerto Rico and US territories</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg mb-4">International Shipping</h3>
                <div className="text-text-muted">
                  <p className="mb-4">We ship worldwide to over 100 countries, including:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Canada and Mexico</li>
                    <li>European Union</li>
                    <li>United Kingdom</li>
                    <li>Australia and New Zealand</li>
                    <li>Japan and South Korea</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Order Tracking */}
          <section>
            <h2 className="text-2xl mb-8">Order Tracking</h2>
            <div className="p-6 border border-border">
              <div className="space-y-4 text-text-muted">
                <p>
                  Once your order ships, you'll receive a confirmation email with tracking information. 
                  You can track your package using the provided tracking number.
                </p>
                <p>
                  For domestic orders, we use FedEx and UPS. For international orders, 
                  we use DHL Express and FedEx International.
                </p>
                <div className="mt-6">
                  <button className="bg-primary text-secondary px-8 py-3 hover:opacity-80 transition-opacity">
                    TRACK YOUR ORDER
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Special Instructions */}
          <section>
            <h2 className="text-2xl mb-8">Special Instructions</h2>
            <div className="space-y-6">
              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Holiday Shipping</h3>
                <p className="text-text-muted">
                  During peak holiday seasons, please allow additional processing and shipping time. 
                  We recommend placing orders early to ensure delivery by your desired date.
                </p>
              </div>
              
              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Gift Wrapping</h3>
                <p className="text-text-muted">
                  Complimentary gift wrapping is available for all orders. 
                  Select the gift wrap option at checkout and include your personalized message.
                </p>
              </div>

              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Address Changes</h3>
                <p className="text-text-muted">
                  If you need to change your shipping address, please contact us immediately at 
                  support@colombeblank.com. We cannot modify addresses once the order has shipped.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center p-8 border border-border">
            <h3 className="text-xl mb-4">Questions about your shipment?</h3>
            <p className="text-text-muted mb-6">
              Our customer service team is here to help with any shipping questions or concerns.
            </p>
            <Link
              href="/support"
              className="inline-block bg-primary text-secondary px-8 py-3 hover:opacity-80 transition-opacity"
            >
              CONTACT SUPPORT
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}