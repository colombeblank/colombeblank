import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import FAQ from "@/pages/faq";
import Support from "@/pages/support";
import Shipping from "@/pages/shipping";
import Returns from "@/pages/returns";
import SizeGuide from "@/pages/size-guide";
import PentacleStartup from "@/components/PentacleStartup";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/support" component={Support} />
      <Route path="/shipping" component={Shipping} />
      <Route path="/returns" component={Returns} />
      <Route path="/size-guide" component={SizeGuide} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showStartup, setShowStartup] = useState(true);

  const handleEnterSite = () => {
    setShowStartup(false);
  };

  if (showStartup) {
    return <PentacleStartup onEnter={handleEnterSite} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
