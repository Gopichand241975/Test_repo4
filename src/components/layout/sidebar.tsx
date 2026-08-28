"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Bot, 
  BookOpen, 
  BarChart3, 
  Users, 
  Blocks, 
  Settings,
  LogOut
} from "lucide-react";

const navItems = [
  { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { title: "Conversations", href: "/dashboard/conversations", icon: MessageSquare },
  { title: "AI Assistant", href: "/dashboard/ai-assistant", icon: Bot },
  { title: "Knowledge Base", href: "/dashboard/knowledge-base", icon: BookOpen },
  { title: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { title: "Customers", href: "/dashboard/customers", icon: Users },
  { title: "Integrations", href: "/dashboard/integrations", icon: Blocks },
  { title: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r border-border bg-muted/40 md:block md:w-64 lg:w-72 flex-shrink-0">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b border-border px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-xl text-primary font-bold">SupportAI</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
                  pathname === item.href ? "bg-muted text-primary hover:text-primary" : ""
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Link
            href="/login"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-muted"
          >
            <LogOut className="h-4 w-4" />
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
}
