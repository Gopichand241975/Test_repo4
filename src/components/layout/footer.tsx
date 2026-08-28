import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto flex flex-col gap-8 py-12 px-4 md:px-8">
        <div className="grid flex-1 grid-cols-2 sm:grid-cols-4 gap-12 md:gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-primary">SupportAI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI customer support for modern businesses.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Product</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/#features" className="hover:text-foreground transition-colors">Features</Link>
              <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
              <Link href="/integrations" className="hover:text-foreground transition-colors">Integrations</Link>
              <Link href="/changelog" className="hover:text-foreground transition-colors">Changelog</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
              <Link href="/security" className="hover:text-foreground transition-colors">Security</Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SupportAI. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Social icons can go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
