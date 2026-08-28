"use client";

import { Search, Filter, MoreHorizontal, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const customers = [
  { id: "CUS-1001", name: "John Smith", email: "john.smith@example.com", conversations: 12, lastActive: "2 min ago", satisfaction: "98%", status: "Active", initials: "JS" },
  { id: "CUS-1002", name: "Sarah Lee", email: "sarah.lee@company.com", conversations: 4, lastActive: "8 min ago", satisfaction: "100%", status: "Active", initials: "SL" },
  { id: "CUS-1003", name: "Mike Chen", email: "mike.chen@startup.io", conversations: 1, lastActive: "12 min ago", satisfaction: "80%", status: "Active", initials: "MC" },
  { id: "CUS-1004", name: "Emily Davis", email: "emily@designstudio.net", conversations: 23, lastActive: "1 day ago", satisfaction: "100%", status: "Inactive", initials: "ED" },
  { id: "CUS-1005", name: "Robert Wilson", email: "r.wilson@corporate.org", conversations: 8, lastActive: "3 days ago", satisfaction: "60%", status: "Active", initials: "RW" },
  { id: "CUS-1006", name: "Jessica Taylor", email: "jessica.t@example.com", conversations: 2, lastActive: "1 week ago", satisfaction: "100%", status: "Inactive", initials: "JT" },
  { id: "CUS-1007", name: "David Miller", email: "david.m@example.com", conversations: 5, lastActive: "2 weeks ago", satisfaction: "90%", status: "Inactive", initials: "DM" },
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground">Manage your customer directory and interactions.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" /> Export CSV
          </Button>
        </div>
      </div>

      <Card>
        <div className="p-4 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search customers by name or email..."
              className="w-full bg-background pl-8"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9">
              <Filter className="w-4 h-4 mr-2" /> Filter
            </Button>
            <span className="text-sm text-muted-foreground border-l border-border pl-2">
              1,248 total
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Conversations</th>
                <th className="px-6 py-3 font-medium">Last Interaction</th>
                <th className="px-6 py-3 font-medium">Satisfaction</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-t border-border bg-background hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-primary/10 text-primary">{customer.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-foreground">{customer.name}</div>
                        <div className="text-muted-foreground text-xs">{customer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground font-medium">{customer.conversations}</td>
                  <td className="px-6 py-4 text-muted-foreground">{customer.lastActive}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center text-xs font-medium ${
                      parseInt(customer.satisfaction) >= 90 ? 'text-green-600' : 
                      parseInt(customer.satisfaction) >= 70 ? 'text-amber-600' : 'text-red-600'
                    }`}>
                      {customer.satisfaction}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={customer.status === 'Active' ? 'default' : 'secondary'} className={customer.status === 'Active' ? 'bg-green-100 text-green-700 hover:bg-green-100 border-none' : ''}>
                      {customer.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
          <div>Showing 1 to 7 of 1,248 entries</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
