import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="py-24 max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Ready to automate your customer support?</h1>
        <p className="text-lg text-muted-foreground mb-8">
          See how SupportAI can help your business respond faster and scale support. Book a personalized demo with our team.
        </p>
        
        <div className="space-y-6 text-sm text-muted-foreground">
          <div>
            <h3 className="font-semibold text-foreground text-base mb-1">Sales inquiries</h3>
            <p>sales@supportai.demo</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-base mb-1">Support</h3>
            <p>support@supportai.demo</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-base mb-1">Response time</h3>
            <p>We typically respond within 2 hours during business hours.</p>
          </div>
        </div>
      </div>
      
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Book a Demo</CardTitle>
            <CardDescription>Fill out the form below and we'll be in touch shortly.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Acme Inc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Business Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="size">Company Size</Label>
                <select id="size" className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  <option value="" disabled selected>Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201+">201+ employees</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
              </div>
              <Button className="w-full" type="button">Book a Demo</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
