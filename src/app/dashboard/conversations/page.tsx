"use client";

import { useState } from "react";
import { Search, Bot, User, PhoneCall, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const conversations = [
  { id: 1, name: "John Smith", preview: "Where is my order?", time: "2m ago", status: "Resolved", type: "AI", active: true },
  { id: 2, name: "Sarah Lee", preview: "I want to request a refund.", time: "8m ago", status: "Open", type: "Human", active: false },
  { id: 3, name: "Mike Chen", preview: "Can you explain your pricing?", time: "12m ago", status: "Resolved", type: "AI", active: false },
  { id: 4, name: "Emily Davis", preview: "I can't log in to my account.", time: "24m ago", status: "Resolved", type: "AI", active: false },
  { id: 5, name: "Robert Wilson", preview: "Do you offer an enterprise plan?", time: "1h ago", status: "Open", type: "Human", active: false },
];

export default function ConversationsPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] rounded-xl border border-border bg-background overflow-hidden">
      {/* Sidebar / List */}
      <div className="w-full md:w-80 lg:w-96 border-r border-border flex flex-col bg-muted/20">
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold text-lg mb-4">Inbox</h2>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search conversations..."
              className="w-full bg-background pl-8"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <div 
              key={conv.id} 
              className={`p-4 border-b border-border cursor-pointer transition-colors hover:bg-muted/50 ${conv.active ? 'bg-muted border-l-4 border-l-primary' : ''}`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-sm">{conv.name}</span>
                <span className="text-xs text-muted-foreground">{conv.time}</span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
                "{conv.preview}"
              </p>
              <div className="flex gap-2">
                <Badge variant={conv.type === 'AI' ? 'secondary' : 'default'} className="text-[10px] px-1.5 py-0">
                  {conv.type === 'AI' ? <Bot className="w-3 h-3 mr-1" /> : <User className="w-3 h-3 mr-1" />}
                  {conv.type}
                </Badge>
                <Badge variant={conv.status === 'Resolved' ? 'secondary' : 'outline'} className={`text-[10px] px-1.5 py-0 ${conv.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'text-amber-700 border-amber-200 bg-amber-50'}`}>
                  {conv.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="hidden md:flex flex-1 flex-col bg-background">
        {/* Chat Header */}
        <div className="h-16 border-b border-border flex items-center justify-between px-6">
          <div>
            <h3 className="font-semibold">John Smith</h3>
            <p className="text-xs text-muted-foreground">john.smith@example.com • Customer since Jan 2024</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-8 text-xs">
              <PhoneCall className="w-3 h-3 mr-2" /> Call
            </Button>
            <Button size="sm" className="h-8 text-xs bg-green-600 hover:bg-green-700">
              <CheckCircle className="w-3 h-3 mr-2" /> Resolve
            </Button>
            <Button variant="default" size="sm" className="h-8 text-xs">
              Take Over
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-muted/10">
          <div className="text-center">
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">Conversation started today at 10:42 AM</span>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium text-xs flex-shrink-0">
              JS
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-medium text-sm">John Smith</span>
                <span className="text-xs text-muted-foreground">10:42 AM</span>
              </div>
              <div className="bg-background border border-border p-3 rounded-2xl rounded-tl-sm text-sm shadow-sm inline-block max-w-[80%]">
                Hi, I'm trying to find out where my order is. My order number is #48291.
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-medium text-sm">SupportAI Assistant</span>
                <span className="text-xs text-muted-foreground">10:42 AM</span>
              </div>
              <div className="bg-primary/10 border border-primary/20 p-3 rounded-2xl rounded-tl-sm text-sm text-foreground inline-block max-w-[80%]">
                Hello John! I'd be happy to check on that for you. <br/><br/>
                Looking up order #48291...<br/><br/>
                Good news! Your order has shipped and is currently in transit. It is scheduled to be delivered by August 30th. 
                Would you like me to provide the tracking link?
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium text-xs flex-shrink-0">
              JS
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-medium text-sm">John Smith</span>
                <span className="text-xs text-muted-foreground">10:44 AM</span>
              </div>
              <div className="bg-background border border-border p-3 rounded-2xl rounded-tl-sm text-sm shadow-sm inline-block max-w-[80%]">
                Yes please, that would be great.
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-medium text-sm">SupportAI Assistant</span>
                <span className="text-xs text-muted-foreground">10:44 AM</span>
              </div>
              <div className="bg-primary/10 border border-primary/20 p-3 rounded-2xl rounded-tl-sm text-sm text-foreground inline-block max-w-[80%]">
                Here is your tracking link: <a href="#" className="text-primary hover:underline">track.example.com/48291</a><br/><br/>
                Is there anything else I can help you with today?
              </div>
            </div>
          </div>

          <div className="text-center">
            <span className="text-xs text-green-700 bg-green-100 border border-green-200 px-3 py-1 rounded-full">
              Conversation automatically marked as resolved by AI
            </span>
          </div>
        </div>

        {/* Reply Area */}
        <div className="p-4 border-t border-border bg-background">
          <div className="relative">
            <textarea 
              className="w-full border border-border rounded-lg bg-muted/50 p-3 pr-24 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:bg-background text-sm min-h-[80px]"
              placeholder="Type a message to take over the conversation..."
            />
            <div className="absolute right-3 bottom-3 flex gap-2">
              <Button size="sm">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
