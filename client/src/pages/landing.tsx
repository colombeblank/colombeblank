import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center">
      <div className="text-center space-y-8 px-6">
        <div className="space-y-4">
          <h1 className="text-2xl tracking-[0.2em] text-primary font-mono">
            COLOMBE BLANK
          </h1>
          <p className="text-xs tracking-wider text-text font-mono max-w-md mx-auto">
            MINIMALISTIC HIGH-END FASHION
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="text-xs text-text font-mono">
            PLEASE SIGN IN TO CONTINUE
          </p>
          <a
            href="/api/login"
            className="inline-block bg-primary text-secondary px-8 py-3 text-xs tracking-wider hover:bg-text transition-colors font-mono"
          >
            SIGN IN
          </a>
        </div>
      </div>
    </div>
  );
}
