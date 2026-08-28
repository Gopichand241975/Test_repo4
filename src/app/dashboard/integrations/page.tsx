"use client";

import { MessageCircle, ShoppingBag, Mail, HardDrive, Share2, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const integrations = [
  { 
    id: "shopify", 
    name: "Shopify", 
    description: "Connect your store to answer order status and product questions automatically.",
    icon: ShoppingBag, 
    status: "Connected",
    color: "bg-[#95BF47]/10 text-[#95BF47]"
  },
  { 
    id: "slack", 
    name: "Slack", 
    description: "Get notifications and reply to customer inquiries directly from Slack channels.",
    icon: MessageCircle, 
    status: "Not Connected",
    color: "bg-[#4A154B]/10 text-[#4A154B]"
  },
  { 
    id: "zendesk", 
    name: "Zendesk", 
    description: "Sync tickets and customer data between SupportAI and Zendesk.",
    icon: Mail, 
    status: "Not Connected",
    color: "bg-[#03363D]/10 text-[#03363D]"
  },
  { 
    id: "gdrive", 
    name: "Google Drive", 
    description: "Automatically sync documents and PDFs to your AI knowledge base.",
    icon: HardDrive, 
    status: "Connected",
    color: "bg-[#4285F4]/10 text-[#4285F4]"
  },
  { 
    id: "whatsapp", 
    name: "WhatsApp", 
    description: "Deploy your AI assistant to WhatsApp Business API to help customers on mobile.",
    icon: Share2, 
    status: "Not Connected",
    color: "bg-[#25D366]/10 text-[#25D366]"
  },
  { 
    id: "zapier", 
    name: "Zapier", 
    description: "Connect SupportAI to 5000+ apps and automate your customer support workflows.",
    icon: Workflow, 
    status: "Not Connected",
    color: "bg-[#FF4F00]/10 text-[#FF4F00]"
  },
];

export default function IntegrationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Integrations</h1>
        <p className="text-muted-foreground">Connect SupportAI with your favorite tools and platforms.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <Card key={integration.id} className="flex flex-col">
            <CardHeader className="flex flex-row items-start justify-between pb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${integration.color}`}>
                <integration.icon className="w-6 h-6" />
              </div>
              <Badge variant={integration.status === 'Connected' ? 'default' : 'outline'} className={integration.status === 'Connected' ? 'bg-green-100 text-green-700 hover:bg-green-100 border-none' : 'text-muted-foreground'}>
                {integration.status}
              </Badge>
            </CardHeader>
            <CardContent className="flex-1">
              <CardTitle className="text-xl mb-2">{integration.name}</CardTitle>
              <CardDescription className="text-sm">
                {integration.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="pt-4 border-t border-border">
              {integration.status === 'Connected' ? (
                <Button variant="outline" className="w-full">Configure</Button>
              ) : (
                <Button className="w-full">Connect</Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 border border-border rounded-lg bg-muted/30 p-8 text-center max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold mb-2">Need a custom integration?</h3>
        <p className="text-muted-foreground text-sm mb-6">
          We offer custom integration services for Enterprise customers. Connect to your proprietary backend or legacy systems.
        </p>
        <Button variant="outline">Contact Sales</Button>
      </div>
    </div>
  );
}
