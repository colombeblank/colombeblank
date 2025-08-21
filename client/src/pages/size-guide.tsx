import React, { useState } from 'react';
import { Link } from 'wouter';

export default function SizeGuide() {
  const [selectedCategory, setSelectedCategory] = useState('women');

  const sizeData = {
    women: {
      clothing: {
        headers: ['Size', 'Bust', 'Waist', 'Hips'],
        rows: [
          ['XS', '32-33"', '24-25"', '34-35"'],
          ['S', '34-35"', '26-27"', '36-37"'],
          ['M', '36-37"', '28-29"', '38-39"'],
          ['L', '38-40"', '30-32"', '40-42"'],
          ['XL', '42-44"', '34-36"', '44-46"']
        ]
      },
      shoes: {
        headers: ['US', 'EU', 'UK', 'Length (in)'],
        rows: [
          ['5', '35', '2.5', '8.5"'],
          ['6', '36', '3.5', '9"'],
          ['7', '37', '4.5', '9.25"'],
          ['8', '38', '5.5', '9.5"'],
          ['9', '39', '6.5', '9.75"'],
          ['10', '40', '7.5', '10"'],
          ['11', '41', '8.5', '10.25"']
        ]
      }
    },
    men: {
      clothing: {
        headers: ['Size', 'Chest', 'Waist', 'Neck'],
        rows: [
          ['XS', '34-36"', '28-30"', '14-14.5"'],
          ['S', '36-38"', '30-32"', '15-15.5"'],
          ['M', '38-40"', '32-34"', '16-16.5"'],
          ['L', '40-42"', '34-36"', '17-17.5"'],
          ['XL', '42-44"', '36-38"', '18-18.5"'],
          ['XXL', '44-46"', '38-40"', '19-19.5"']
        ]
      },
      shoes: {
        headers: ['US', 'EU', 'UK', 'Length (in)'],
        rows: [
          ['7', '40', '6', '9.75"'],
          ['8', '41', '7', '10"'],
          ['9', '42', '8', '10.25"'],
          ['10', '43', '9', '10.5"'],
          ['11', '44', '10', '10.75"'],
          ['12', '45', '11', '11"'],
          ['13', '46', '12', '11.25"']
        ]
      }
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
          <h1 className="text-4xl mb-4">SIZE GUIDE</h1>
          <p className="text-text-muted">Find your perfect fit with our comprehensive sizing charts.</p>
        </header>

        {/* Category Selector */}
        <div className="flex justify-center mb-12">
          <div className="border border-border inline-flex">
            <button
              className={`px-8 py-3 ${selectedCategory === 'women' 
                ? 'bg-primary text-secondary' 
                : 'bg-secondary text-text hover:bg-hover'
              } transition-colors`}
              onClick={() => setSelectedCategory('women')}
              data-testid="button-women"
            >
              WOMEN
            </button>
            <button
              className={`px-8 py-3 border-l border-border ${selectedCategory === 'men' 
                ? 'bg-primary text-secondary' 
                : 'bg-secondary text-text hover:bg-hover'
              } transition-colors`}
              onClick={() => setSelectedCategory('men')}
              data-testid="button-men"
            >
              MEN
            </button>
          </div>
        </div>

        {/* Size Charts */}
        <div className="space-y-16">
          {/* Clothing Sizes */}
          <section>
            <h2 className="text-2xl mb-8 text-center">
              {selectedCategory.toUpperCase()} CLOTHING SIZES
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-border">
                <thead>
                  <tr className="bg-hover">
                    {sizeData[selectedCategory as keyof typeof sizeData].clothing.headers.map((header, index) => (
                      <th key={index} className="px-6 py-4 text-left border-r border-border last:border-r-0">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizeData[selectedCategory as keyof typeof sizeData].clothing.rows.map((row, index) => (
                    <tr key={index} className="border-t border-border">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-6 py-4 border-r border-border last:border-r-0">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Shoe Sizes */}
          <section>
            <h2 className="text-2xl mb-8 text-center">
              {selectedCategory.toUpperCase()} SHOE SIZES
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-border">
                <thead>
                  <tr className="bg-hover">
                    {sizeData[selectedCategory as keyof typeof sizeData].shoes.headers.map((header, index) => (
                      <th key={index} className="px-6 py-4 text-left border-r border-border last:border-r-0">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizeData[selectedCategory as keyof typeof sizeData].shoes.rows.map((row, index) => (
                    <tr key={index} className="border-t border-border">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-6 py-4 border-r border-border last:border-r-0">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* How to Measure */}
        <section className="mt-16">
          <h2 className="text-2xl mb-8 text-center">HOW TO MEASURE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-border">
              <h3 className="text-lg mb-4">Bust/Chest</h3>
              <p className="text-text-muted text-sm">
                Measure around the fullest part of your bust/chest, keeping the tape parallel to the floor.
              </p>
            </div>
            
            <div className="p-6 border border-border">
              <h3 className="text-lg mb-4">Waist</h3>
              <p className="text-text-muted text-sm">
                Measure around your natural waistline, which is the narrowest part of your torso.
              </p>
            </div>

            <div className="p-6 border border-border">
              <h3 className="text-lg mb-4">Hips</h3>
              <p className="text-text-muted text-sm">
                Measure around the fullest part of your hips, approximately 8" below your waistline.
              </p>
            </div>

            <div className="p-6 border border-border">
              <h3 className="text-lg mb-4">Inseam</h3>
              <p className="text-text-muted text-sm">
                Measure from the top of your inner thigh to the bottom of your ankle.
              </p>
            </div>

            <div className="p-6 border border-border">
              <h3 className="text-lg mb-4">Sleeve Length</h3>
              <p className="text-text-muted text-sm">
                Measure from your shoulder to your wrist with your arm slightly bent.
              </p>
            </div>

            <div className="p-6 border border-border">
              <h3 className="text-lg mb-4">Foot Length</h3>
              <p className="text-text-muted text-sm">
                Measure from the back of your heel to the tip of your longest toe.
              </p>
            </div>
          </div>
        </section>

        {/* Fit Guide */}
        <section className="mt-16">
          <h2 className="text-2xl mb-8 text-center">FIT GUIDE</h2>
          <div className="space-y-6">
            <div className="p-6 border border-border">
              <h3 className="text-lg mb-4">Between Sizes?</h3>
              <p className="text-text-muted">
                If you're between sizes, we recommend sizing up for a more relaxed fit or sizing down 
                for a more fitted look. Consider the style and intended use of the garment.
              </p>
            </div>
            
            <div className="p-6 border border-border">
              <h3 className="text-lg mb-4">Fabric Considerations</h3>
              <p className="text-text-muted">
                Natural fibers like cotton may shrink slightly after washing. Stretchy fabrics like 
                jersey will conform to your body. Check individual product pages for specific fit notes.
              </p>
            </div>

            <div className="p-6 border border-border">
              <h3 className="text-lg mb-4">Still Unsure?</h3>
              <p className="text-text-muted">
                Our customer service team is happy to help you choose the right size. 
                We also offer free exchanges within 30 days.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-16 text-center p-8 border border-border">
          <h3 className="text-xl mb-4">Need Sizing Help?</h3>
          <p className="text-text-muted mb-6">
            Our fit experts are available to help you find the perfect size.
          </p>
          <Link
            href="/support"
            className="inline-block bg-primary text-secondary px-8 py-3 hover:opacity-80 transition-opacity"
          >
            CONTACT SUPPORT
          </Link>
        </section>
      </main>
    </div>
  );
}