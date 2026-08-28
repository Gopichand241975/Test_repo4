"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="py-24 max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
        <p className="text-lg text-muted-foreground mb-8">Choose the plan that fits your business needs.</p>
        
        <div className="inline-flex items-center p-1 bg-muted rounded-full">
          <button 
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${!isYearly ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button 
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${isYearly ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            onClick={() => setIsYearly(true)}
          >
            Yearly <span className="text-[10px] uppercase bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Save 20%</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Free Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl">Free</CardTitle>
            <CardDescription>Perfect for trying out SupportAI.</CardDescription>
            <div className="mt-4 text-3xl font-bold">$0<span className="text-sm font-normal text-muted-foreground">/month</span></div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> 100 conversations/month</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Basic AI chatbot</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Knowledge base</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Basic analytics</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/signup" className="w-full">
              <Button variant="outline" className="w-full">Start Free</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Starter Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl">Starter</CardTitle>
            <CardDescription>For small businesses and startups.</CardDescription>
            <div className="mt-4 text-3xl font-bold">${isYearly ? "23" : "29"}<span className="text-sm font-normal text-muted-foreground">/month</span></div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> 2,000 conversations/month</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Advanced AI</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Custom chatbot</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Analytics dashboard</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Email support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/signup" className="w-full">
              <Button className="w-full">Start Free Trial</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Business Plan */}
        <Card className="flex flex-col border-primary relative shadow-lg">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </div>
          <CardHeader>
            <CardTitle className="text-xl">Business</CardTitle>
            <CardDescription>For growing customer support teams.</CardDescription>
            <div className="mt-4 text-3xl font-bold">${isYearly ? "63" : "79"}<span className="text-sm font-normal text-muted-foreground">/month</span></div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> 10,000 conversations/month</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Advanced analytics</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Human handoff</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> CRM Integrations</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Priority support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/signup" className="w-full">
              <Button className="w-full">Start Free Trial</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Enterprise Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl">Enterprise</CardTitle>
            <CardDescription>Custom solutions for large volumes.</CardDescription>
            <div className="mt-4 text-3xl font-bold">Custom</div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Unlimited conversations</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Custom AI training</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Dedicated success manager</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Advanced security & compliance</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-4 h-4" /> Custom integrations</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/contact" className="w-full">
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
