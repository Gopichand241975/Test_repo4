"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { MessageSquare, Bot, ThumbsUp, Clock } from "lucide-react";

const lineData = [
  { name: "Mon", conversations: 1400 },
  { name: "Tue", conversations: 2100 },
  { name: "Wed", conversations: 1800 },
  { name: "Thu", conversations: 2400 },
  { name: "Fri", conversations: 2600 },
  { name: "Sat", conversations: 1200 },
  { name: "Sun", conversations: 982 },
];

const pieData = [
  { name: "AI Resolved", value: 87 },
  { name: "Human Resolved", value: 13 },
];

const COLORS = ["#2563eb", "#94a3b8"];

export default function DashboardOverview() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Good morning, Alex 👋</h1>
          <p className="text-muted-foreground">Here's what's happening with your customer support today.</p>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversations</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,482</div>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <span className="font-medium">+18.2%</span> <span className="text-muted-foreground ml-1">from last month</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Resolution Rate</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <span className="font-medium">+5.4%</span> <span className="text-muted-foreground ml-1">from last month</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <span className="font-medium">+2.1%</span> <span className="text-muted-foreground ml-1">from last month</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2 sec</div>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <span className="font-medium">-18%</span> <span className="text-muted-foreground ml-1">from last month</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-2">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Conversations Overview</CardTitle>
            <CardDescription>Volume of customer interactions over the last 7 days.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{ stroke: '#f1f5f9', strokeWidth: 2 }}
                />
                <Line type="monotone" dataKey="conversations" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Resolution Breakdown</CardTitle>
            <CardDescription>How inquiries were resolved this week.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col items-center justify-center">
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex w-full justify-center gap-6 mt-4">
              {pieData.map((entry, index) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                  <span className="text-sm font-medium">{entry.name}</span>
                  <span className="text-sm text-muted-foreground">({entry.value}%)</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 mt-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Customer Questions</CardTitle>
            <CardDescription>Most frequent inquiries handled by the AI.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { q: "Where is my order?", count: 1245 },
                { q: "How can I request a refund?", count: 852 },
                { q: "What is your shipping policy?", count: 541 },
                { q: "How do I change my subscription?", count: 320 },
                { q: "Do you ship internationally?", count: 198 },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted w-6 h-6 rounded flex items-center justify-center text-xs font-medium text-muted-foreground">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium">{item.q}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest interactions across your platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { title: "John Smith", desc: "Where is my order?", time: "2 min ago", type: "AI Resolved", color: "bg-blue-100 text-blue-700" },
                { title: "Sarah Lee", desc: "Refund request", time: "8 min ago", type: "Human Handoff", color: "bg-amber-100 text-amber-700" },
                { title: "Mike Chen", desc: "Product information", time: "12 min ago", type: "AI Resolved", color: "bg-blue-100 text-blue-700" },
                { title: "Emily Davis", desc: "Login issue", time: "24 min ago", type: "AI Resolved", color: "bg-blue-100 text-blue-700" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex-shrink-0 mt-0.5"></div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{item.title}</p>
                      <span className="text-xs text-muted-foreground">{item.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">"{item.desc}"</p>
                    <div className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium ${item.color}`}>
                      {item.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
