import React from 'react';
import { Link } from 'wouter';

export default function Returns() {
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
          <h1 className="text-4xl mb-4">RETURNS & EXCHANGES</h1>
          <p className="text-text-muted">Our flexible return policy ensures your complete satisfaction.</p>
        </header>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl mb-8">Return Policy</h2>
            <div className="p-6 border border-border">
              <div className="space-y-4 text-text-muted">
                <p className="text-lg">
                  <strong>30-Day Return Window:</strong> We accept returns within 30 days of your purchase date.
                </p>
                <p>
                  Items must be unworn, unwashed, and in original condition with all tags attached. 
                  Original packaging and receipt are required for all returns.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-8">Return Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-border text-center">
                <div className="text-3xl mb-4">1</div>
                <h3 className="text-lg mb-4">Initiate Return</h3>
                <p className="text-text-muted">
                  Contact our customer service or use our online return portal to start your return.
                </p>
              </div>
              
              <div className="p-6 border border-border text-center">
                <div className="text-3xl mb-4">2</div>
                <h3 className="text-lg mb-4">Package & Ship</h3>
                <p className="text-text-muted">
                  Pack items securely with the provided return label and drop off at any authorized location.
                </p>
              </div>

              <div className="p-6 border border-border text-center">
                <div className="text-3xl mb-4">3</div>
                <h3 className="text-lg mb-4">Receive Refund</h3>
                <p className="text-text-muted">
                  Your refund will be processed within 3-5 business days of receiving your return.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-8">Exchange Policy</h2>
            <div className="space-y-6">
              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Size Exchanges</h3>
                <p className="text-text-muted">
                  Free exchanges for different sizes within 30 days. Subject to availability.
                </p>
              </div>
              
              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Color Exchanges</h3>
                <p className="text-text-muted">
                  Exchange for different colors within the same product line. Original price applies.
                </p>
              </div>

              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Damaged Items</h3>
                <p className="text-text-muted">
                  Items damaged during shipping will be replaced at no cost. Contact us immediately upon receipt.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-8">Non-Returnable Items</h2>
            <div className="p-6 border border-border">
              <ul className="list-disc list-inside space-y-2 text-text-muted">
                <li>Items purchased with a discount code over 30% off</li>
                <li>Final sale items</li>
                <li>Items that show signs of wear or alteration</li>
                <li>Items without original tags</li>
                <li>Undergarments and swimwear</li>
                <li>Custom or personalized items</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-8">Refund Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Refund Methods</h3>
                <div className="space-y-2 text-text-muted">
                  <p>• Original payment method</p>
                  <p>• Store credit (optional)</p>
                  <p>• Gift card (for gift purchases)</p>
                </div>
              </div>
              
              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Processing Time</h3>
                <div className="space-y-2 text-text-muted">
                  <p>• Credit cards: 3-5 business days</p>
                  <p>• PayPal: 2-3 business days</p>
                  <p>• Store credit: Immediate</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-8">International Returns</h2>
            <div className="p-6 border border-border">
              <div className="space-y-4 text-text-muted">
                <p>
                  International customers are responsible for return shipping costs. 
                  We recommend using a trackable service for returns.
                </p>
                <p>
                  Duties and taxes paid on original order are non-refundable. 
                  Additional duties may apply on exchanges.
                </p>
                <p>
                  Please contact our international support team for specific return instructions 
                  for your country.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center p-8 border border-border">
            <h3 className="text-xl mb-4">Start Your Return</h3>
            <p className="text-text-muted mb-6">
              Ready to return or exchange an item? Our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-secondary px-8 py-3 hover:opacity-80 transition-opacity">
                START RETURN
              </button>
              <Link
                href="/support"
                className="inline-block border border-border px-8 py-3 hover:bg-hover transition-colors"
              >
                CONTACT SUPPORT
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}