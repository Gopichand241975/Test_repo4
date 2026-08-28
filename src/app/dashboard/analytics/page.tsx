"use client";

import { useState } from "react";
import { Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, Bar, 
  LineChart, Line, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from "recharts";

const volumeData = [
  { time: "00:00", count: 120 },
  { time: "04:00", count: 85 },
  { time: "08:00", count: 420 },
  { time: "12:00", count: 850 },
  { time: "16:00", count: 680 },
  { time: "20:00", count: 320 },
  { time: "23:59", count: 180 },
];

const resRateData = [
  { date: "Aug 1", ai: 82, human: 18 },
  { date: "Aug 5", ai: 84, human: 16 },
  { date: "Aug 10", ai: 83, human: 17 },
  { date: "Aug 15", ai: 86, human: 14 },
  { date: "Aug 20", ai: 87, human: 13 },
  { date: "Aug 25", ai: 88, human: 12 },
  { date: "Aug 30", ai: 89, human: 11 },
];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Deep dive into your support performance metrics.</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-background border border-border flex items-center p-1 rounded-md">
            {['7d', '30d', '90d'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 text-xs font-medium rounded-sm transition-colors ${timeRange === range ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {range}
              </button>
            ))}
          </div>
          <Button variant="outline" size="sm" className="bg-background h-8">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button variant="outline" size="sm" className="bg-background h-8">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">45,231</div>
            <p className="text-xs text-green-500 mt-1 font-medium">+12.5% vs previous period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">AI Resolution Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">87.4%</div>
            <p className="text-xs text-green-500 mt-1 font-medium">+2.1% vs previous period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Human Handoff Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12.6%</div>
            <p className="text-xs text-green-500 mt-1 font-medium">-2.1% vs previous period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Resolution Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1.2m</div>
            <p className="text-xs text-green-500 mt-1 font-medium">-45% vs previous period</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Resolution Trend</CardTitle>
            <CardDescription>AI vs Human resolution rates over time.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={resRateData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorHuman" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip />
                <Area type="monotone" dataKey="ai" stroke="#2563eb" fillOpacity={1} fill="url(#colorAi)" name="AI Resolved %" />
                <Area type="monotone" dataKey="human" stroke="#94a3b8" fillOpacity={1} fill="url(#colorHuman)" name="Human Resolved %" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversation Volume by Time</CardTitle>
            <CardDescription>Peak support hours across an average day.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip cursor={{ fill: '#f1f5f9' }} />
                <Bar dataKey="count" fill="#2563eb" radius={[4, 4, 0, 0]} name="Conversations" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
