"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="space-y-6 max-w-5xl mx-auto w-full pb-10">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and subscription preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-64 flex-shrink-0">
          <nav className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
            {[
              { id: "account", label: "Account" },
              { id: "notifications", label: "Notifications" },
              { id: "security", label: "Security" },
              { id: "billing", label: "Billing & Plans" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex justify-start px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id 
                    ? "bg-muted text-primary" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        <div className="flex-1 space-y-6">
          {activeTab === "account" && (
            <Card>
              <CardHeader>
                <CardTitle>Profile Profile</CardTitle>
                <CardDescription>Update your personal information and profile picture.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-lg bg-primary/10 text-primary">AM</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Button size="sm">Upload new avatar</Button>
                      <Button variant="outline" size="sm">Remove</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 800K</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" defaultValue="Alex" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" defaultValue="Morgan" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" type="email" defaultValue="alex.morgan@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="NovaCommerce" />
                </div>
              </CardContent>
              <CardFooter className="border-t border-border pt-6">
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Configure how you receive alerts and updates.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold">Email Notifications</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Weekly Reports</Label>
                      <p className="text-sm text-muted-foreground">Receive a weekly summary of your AI's performance.</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary focus:ring-primary w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Human Handoff Alerts</Label>
                      <p className="text-sm text-muted-foreground">Get an email when a customer requests to speak with a human.</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary focus:ring-primary w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Product Updates</Label>
                      <p className="text-sm text-muted-foreground">Receive news about new features and updates.</p>
                    </div>
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary w-5 h-5" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-border pt-6">
                <Button>Save Preferences</Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "security" && (
            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>Manage your password and security settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold">Change Password</h3>
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button>Update Password</Button>
                </div>

                <div className="pt-6 border-t border-border space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground mt-1">Add an extra layer of security to your account.</p>
                  </div>
                  <Button variant="outline">Enable 2FA</Button>
                </div>
                
                <div className="pt-6 border-t border-red-200 space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-red-600">Danger Zone</h3>
                    <p className="text-sm text-muted-foreground mt-1">Permanently delete your account and all data.</p>
                  </div>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "billing" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                  <CardDescription>You are currently on the Starter plan.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg flex items-center justify-between mb-6">
                    <div>
                      <div className="font-semibold text-lg">Starter Plan</div>
                      <div className="text-sm text-muted-foreground">$29.00 / month</div>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Conversations used this month</span>
                      <span className="font-medium">1,482 / 2,000</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '74%' }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground text-right mt-1">Resets on Sep 1, 2024</p>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border pt-6 flex gap-2">
                  <Button>Upgrade Plan</Button>
                  <Button variant="outline">Cancel Subscription</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 border border-border p-4 rounded-lg">
                    <div className="bg-muted w-12 h-8 rounded flex items-center justify-center font-bold text-xs">
                      VISA
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Visa ending in 4242</div>
                      <div className="text-xs text-muted-foreground">Expires 12/2025</div>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
