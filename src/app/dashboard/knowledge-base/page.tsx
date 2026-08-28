"use client";

import { UploadCloud, FileText, MoreVertical, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const documents = [
  { id: 1, name: "Shipping Policy.pdf", type: "PDF", size: "2.4 MB", date: "Aug 24, 2024", status: "Active" },
  { id: 2, name: "Refund Policy.pdf", type: "PDF", size: "1.1 MB", date: "Aug 22, 2024", status: "Active" },
  { id: 3, name: "Product Guide.pdf", type: "PDF", size: "8.5 MB", date: "Aug 15, 2024", status: "Active" },
  { id: 4, name: "Company FAQ", type: "Text", size: "45 KB", date: "Aug 10, 2024", status: "Active" },
  { id: 5, name: "Pricing Information", type: "Web Link", size: "-", date: "Aug 05, 2024", status: "Syncing" },
];

export default function KnowledgeBasePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Knowledge Base</h1>
          <p className="text-muted-foreground">Give your AI the information it needs to answer customer questions.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-background">
            <Plus className="w-4 h-4 mr-2" /> Add FAQ
          </Button>
          <Button>
            <UploadCloud className="w-4 h-4 mr-2" /> Upload Document
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documents..."
                className="w-full bg-background pl-8"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              Showing 5 of 5 documents
            </div>
          </div>

          <Card>
            <div className="rounded-md border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-medium">Document Name</th>
                    <th className="px-4 py-3 font-medium">Type</th>
                    <th className="px-4 py-3 font-medium">Date Added</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr key={doc.id} className="border-t border-border bg-background hover:bg-muted/50 transition-colors">
                      <td className="px-4 py-4 font-medium flex items-center gap-2">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        {doc.name}
                      </td>
                      <td className="px-4 py-4 text-muted-foreground">{doc.type}</td>
                      <td className="px-4 py-4 text-muted-foreground">{doc.date}</td>
                      <td className="px-4 py-4">
                        <Badge variant={doc.status === 'Active' ? 'default' : 'secondary'} className={doc.status === 'Active' ? 'bg-green-100 text-green-700 hover:bg-green-100 border-none' : ''}>
                          {doc.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Upload New</CardTitle>
              <CardDescription>Drag and drop your files here or click to browse.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center flex flex-col items-center justify-center bg-muted/20 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Click to upload</h3>
                <p className="text-sm text-muted-foreground mb-4">or drag and drop</p>
                <p className="text-xs text-muted-foreground">
                  PDF, DOCX, TXT, CSV up to 10MB
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-semibold mb-3">Sync from Web</h4>
                <div className="flex gap-2">
                  <Input placeholder="https://example.com/help" className="text-sm" />
                  <Button variant="secondary">Sync</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  We'll crawl the URL and subpages to extract FAQs and help content.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
