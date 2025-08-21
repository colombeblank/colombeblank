import React from 'react';
import { Link } from 'wouter';

export default function About() {
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
          <h1 className="text-4xl mb-4">ABOUT COLOMBE BLANK</h1>
          <p className="text-text-muted">Where minimalist design meets luxury fashion</p>
        </header>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl mb-8">Our Story</h2>
            <div className="space-y-6 text-text-muted leading-relaxed">
              <p>
                Founded in 2020, Colombe Blank emerged from a simple belief: that true elegance lies in simplicity. 
                In a world saturated with excess, we saw an opportunity to create something different—a brand that 
                celebrates the beauty of restraint and the power of purposeful design.
              </p>
              <p>
                Our name, "Colombe Blank," represents the clean slate—the dove of peace meeting the endless 
                possibilities of empty space. It's this philosophy that guides every decision we make, from the 
                careful selection of materials to the precise cut of each garment.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-8">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Timeless Over Trendy</h3>
                <p className="text-text-muted">
                  We design pieces that transcend seasons and trends, creating a wardrobe that remains relevant 
                  year after year.
                </p>
              </div>
              
              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Quality Over Quantity</h3>
                <p className="text-text-muted">
                  Every piece is crafted with meticulous attention to detail, using only the finest materials 
                  and construction techniques.
                </p>
              </div>

              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Sustainability</h3>
                <p className="text-text-muted">
                  We believe in responsible fashion, using sustainable materials and ethical production practices 
                  wherever possible.
                </p>
              </div>

              <div className="p-6 border border-border">
                <h3 className="text-lg mb-4">Conscious Consumption</h3>
                <p className="text-text-muted">
                  We encourage thoughtful purchasing decisions, creating pieces designed to be cherished and 
                  worn for years to come.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-8">Our Approach</h2>
            <div className="space-y-6 text-text-muted leading-relaxed">
              <p>
                At Colombe Blank, we believe that luxury isn't about ostentation—it's about the confidence that 
                comes from wearing something perfectly made. Our design process begins with the essential question: 
                "What does this piece need to be?" From there, we strip away everything unnecessary, leaving only 
                what serves both function and form.
              </p>
              <p>
                Each collection is curated rather than created in excess. We work with a select group of artisans 
                and suppliers who share our commitment to quality and ethical practices. This allows us to maintain 
                complete oversight of our supply chain and ensure that every piece meets our exacting standards.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-8">The Collections</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg mb-4">Women's Collection</h3>
                <p className="text-text-muted">
                  Our women's line features carefully considered pieces that form the foundation of a conscious wardrobe. 
                  From essential tops crafted in organic cotton to structured blazers that transition seamlessly from 
                  day to evening, each piece is designed to work harmoniously with others in your closet.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg mb-4">Men's Collection</h3>
                <p className="text-text-muted">
                  The men's collection embodies refined simplicity through clean lines and impeccable tailoring. 
                  Classic silhouettes are updated with modern sensibilities, creating pieces that feel both timeless 
                  and contemporary.
                </p>
              </div>

              <div>
                <h3 className="text-lg mb-4">Accessories</h3>
                <p className="text-text-muted">
                  Our accessories collection features carefully selected pieces that complement and complete your look. 
                  From luxurious scarves in the finest cashmere to leather goods crafted by master artisans, each 
                  accessory is designed to elevate your everyday experience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-8">Our Commitment</h2>
            <div className="p-8 border border-border">
              <div className="space-y-6 text-text-muted">
                <p>
                  <strong>To Quality:</strong> We stand behind every piece we create. Our commitment to quality means 
                  using only the finest materials and working with skilled artisans who take pride in their craft.
                </p>
                <p>
                  <strong>To Sustainability:</strong> We're committed to minimizing our environmental impact through 
                  responsible sourcing, reduced packaging, and supporting suppliers who share our values.
                </p>
                <p>
                  <strong>To You:</strong> We believe in building lasting relationships with our customers based on 
                  trust, transparency, and exceptional service. Your satisfaction is our priority.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl mb-8">Experience Colombe Blank</h2>
            <p className="text-text-muted mb-8 max-w-2xl mx-auto">
              We invite you to discover the quiet confidence that comes from wearing pieces designed with intention and 
              crafted with care. Welcome to a more thoughtful approach to luxury fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block bg-primary text-secondary px-8 py-3 hover:opacity-80 transition-opacity"
              >
                SHOP COLLECTION
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-border px-8 py-3 hover:bg-hover transition-colors"
              >
                GET IN TOUCH
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}