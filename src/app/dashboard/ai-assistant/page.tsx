"use client";

import { Save, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function AIAssistantPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto w-full pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AI Assistant Settings</h1>
          <p className="text-muted-foreground">Configure how your AI responds to customers.</p>
        </div>
        <Button className="shrink-0">
          <Save className="w-4 h-4 mr-2" /> Save Changes
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Profile</CardTitle>
            <CardDescription>The identity your AI will use when talking to customers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="ai-name">Assistant Name</Label>
              <Input id="ai-name" defaultValue="SupportAI Assistant" />
              <p className="text-xs text-muted-foreground">This is the name customers will see in the chat interface.</p>
            </div>
            
            <div className="space-y-2">
              <Label>Response Languages</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {['English', 'Spanish', 'French', 'German'].map((lang) => (
                  <div key={lang} className="bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {lang}
                  </div>
                ))}
                <div className="border border-dashed border-border px-3 py-1 rounded-full text-sm font-medium text-muted-foreground cursor-pointer hover:bg-muted transition-colors">
                  + Add Language
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">The AI can automatically detect the customer's language and respond accordingly.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Personality & Tone</CardTitle>
            <CardDescription>How the AI should communicate.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label>Tone presets</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="border-2 border-primary bg-primary/5 rounded-lg p-3 text-center cursor-pointer">
                  <div className="font-semibold text-sm mb-1 text-primary">Professional</div>
                  <div className="text-xs text-muted-foreground">Polite & formal</div>
                </div>
                <div className="border border-border bg-background rounded-lg p-3 text-center cursor-pointer hover:border-primary/50 transition-colors">
                  <div className="font-semibold text-sm mb-1">Friendly</div>
                  <div className="text-xs text-muted-foreground">Warm & conversational</div>
                </div>
                <div className="border border-border bg-background rounded-lg p-3 text-center cursor-pointer hover:border-primary/50 transition-colors">
                  <div className="font-semibold text-sm mb-1">Concise</div>
                  <div className="text-xs text-muted-foreground">Direct & to the point</div>
                </div>
                <div className="border border-border bg-background rounded-lg p-3 text-center cursor-pointer hover:border-primary/50 transition-colors">
                  <div className="font-semibold text-sm mb-1">Empathetic</div>
                  <div className="text-xs text-muted-foreground">Understanding & patient</div>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between">
                <Label htmlFor="instructions">Custom System Instructions</Label>
                <Button variant="ghost" size="sm" className="h-5 px-2 text-xs text-primary">
                  <Sparkles className="w-3 h-3 mr-1" /> Optimize
                </Button>
              </div>
              <Textarea 
                id="instructions" 
                className="min-h-[150px] font-mono text-sm bg-muted/30" 
                defaultValue="You are a helpful customer support agent for our business. 
Answer customer questions using the company's knowledge base. 
Always be polite and professional. 
If you cannot confidently answer a question based on the provided knowledge base, offer to transfer the customer to a human agent.
Do not make up information or promise features we don't have."
              />
              <p className="text-xs text-muted-foreground">These instructions override the base personality and guide the AI's exact behavior.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Human Handoff</CardTitle>
            <CardDescription>Rules for when to transfer to a human.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="frustration" defaultChecked className="rounded border-gray-300 text-primary focus:ring-primary" />
              <Label htmlFor="frustration" className="font-normal text-sm">Automatically transfer when customer expresses frustration</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="unknown" defaultChecked className="rounded border-gray-300 text-primary focus:ring-primary" />
              <Label htmlFor="unknown" className="font-normal text-sm">Automatically transfer when AI is unable to answer based on Knowledge Base</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="request" defaultChecked className="rounded border-gray-300 text-primary focus:ring-primary" />
              <Label htmlFor="request" className="font-normal text-sm">Transfer anytime the user says "talk to human" or similar</Label>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/50 border-t border-border mt-4">
            <Button variant="outline" className="w-full sm:w-auto bg-background">Test Handoff Flow</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
