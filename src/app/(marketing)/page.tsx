import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Clock, BarChart3, Globe, MessageSquare, Zap, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-4 py-24 md:py-32 lg:py-40 text-center flex flex-col items-center justify-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Turn customer questions into <span className="text-primary">instant answers.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl">
          AI-powered customer support that helps businesses respond faster, automate repetitive questions, and deliver better customer experiences — 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/signup">
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base">
              Start Free Trial
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-base">
              Book a Demo
            </Button>
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          No credit card required • Setup in minutes • 24/7 AI support
        </p>
      </section>

      {/* Trust Section */}
      <section className="py-12 border-y border-border bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8">Trusted by growing businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {["NovaCommerce", "FlowDesk", "CloudNest", "BrightLabs", "Marketly"].map((company) => (
              <span key={company} className="text-xl font-bold tracking-tighter text-foreground/80">{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="solutions" className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer support shouldn't slow your business down.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Support teams are overwhelmed. Customers are impatient. We fix both.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background border border-border p-8 rounded-2xl">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Slow Responses</h3>
            <p className="text-muted-foreground">Customers don't want to wait hours for simple answers. Delay leads to abandoned carts and frustration.</p>
          </div>
          <div className="bg-background border border-border p-8 rounded-2xl">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-lg flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Repetitive Questions</h3>
            <p className="text-muted-foreground">Support teams waste time answering the same questions about shipping, returns, and pricing over and over.</p>
          </div>
          <div className="bg-background border border-border p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Rising Support Costs</h3>
            <p className="text-muted-foreground">Businesses need to scale support without continuously increasing headcount and software licensing fees.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to automate support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Powerful features designed to reduce workload while improving customer satisfaction.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Customer Support", desc: "Answer customer questions instantly using intelligent AI.", icon: Bot },
              { title: "24/7 Availability", desc: "Provide customer support around the clock.", icon: Clock },
              { title: "Smart Knowledge Base", desc: "Connect FAQs, documents, policies, and product information.", icon: Zap },
              { title: "Human Handoff", desc: "Automatically transfer complex conversations to human agents.", icon: MessageSquare },
              { title: "Analytics", desc: "Understand customer questions, resolution rates, and support performance.", icon: BarChart3 },
              { title: "Multilingual Support", desc: "Serve customers in multiple languages natively.", icon: Globe }
            ].map((feature, i) => (
              <Card key={i} className="border-border bg-background shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-lg text-muted-foreground">Get started in minutes, not months.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border -z-10"></div>
          
          <div className="flex flex-col items-center text-center relative bg-background">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 ring-8 ring-background">1</div>
            <h3 className="text-xl font-semibold mb-3">Connect your knowledge</h3>
            <p className="text-muted-foreground">Upload FAQs, documents, policies, and product information.</p>
          </div>
          
          <div className="flex flex-col items-center text-center relative bg-background">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 ring-8 ring-background">2</div>
            <h3 className="text-xl font-semibold mb-3">Train your AI assistant</h3>
            <p className="text-muted-foreground">SupportAI instantly learns from your business information.</p>
          </div>
          
          <div className="flex flex-col items-center text-center relative bg-background">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 ring-8 ring-background">3</div>
            <h3 className="text-xl font-semibold mb-3">Automate customer support</h3>
            <p className="text-muted-foreground">Deploy the AI chatbot and start answering customers instantly.</p>
          </div>
        </div>
      </section>

      {/* Chatbot Demo */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your AI support agent is always ready.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Provide human-like responses that solve actual problems. SupportAI doesn't just link to help articles—it answers the question.
            </p>
            <ul className="space-y-4 mb-8">
              {["Resolves 80%+ of common inquiries", "Context-aware responses", "Seamless handoff to human agents"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/signup">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Try it for yourself</Button>
            </Link>
          </div>
          
          <div className="flex-1 w-full max-w-md bg-background rounded-2xl shadow-2xl overflow-hidden text-foreground">
            <div className="bg-muted p-4 border-b border-border flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">SupportAI</h4>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-600 inline-block"></span>
                  Online
                </p>
              </div>
            </div>
            
            <div className="p-4 space-y-4 h-[400px] overflow-y-auto bg-muted/10">
              <div className="flex gap-3 justify-end">
                <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm">
                  Where is my order #48291?
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-primary-foreground mt-1">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-muted p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm">
                  Your order is currently in transit and is expected to arrive on August 30. You can track your shipment using the button below.
                  <div className="mt-3">
                    <Button variant="outline" size="sm" className="w-full bg-background">Track Order</Button>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 justify-end">
                <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm">
                  Can I return a product?
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-primary-foreground mt-1">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-muted p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm">
                  Yes. Products can be returned within 30 days of delivery. Would you like me to help you start a return request?
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" className="flex-1 text-xs">Start Return</Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-background text-xs">Talk to Agent</Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-3 border-t border-border bg-background">
              <div className="bg-muted rounded-full px-4 py-2 text-sm text-muted-foreground">Type your message...</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to automate your support?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join hundreds of businesses that use SupportAI to scale their customer service without scaling their costs.
        </p>
        <Link href="/signup">
          <Button size="lg" className="h-12 px-8 text-base">Get Started for Free</Button>
        </Link>
      </section>
    </div>
  );
}
