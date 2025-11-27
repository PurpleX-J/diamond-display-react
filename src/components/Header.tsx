import { Search, Heart, ShoppingCart, User, Camera, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const categories = [
    "All Jewelry",
    "Rings",
    "Earrings",
    "Pendants",
    "Necklaces",
    "Bracelets",
    "Collections",
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 sm:py-4 gap-2 sm:gap-4">
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-muted">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-6 mt-8">
                <h2 className="text-xl font-serif font-bold text-primary">Menu</h2>
                <nav className="flex flex-col gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      className="justify-start text-base hover:text-accent hover:bg-accent/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category}
                    </Button>
                  ))}
                </nav>
                
                {/* Mobile Search */}
                <div className="pt-4 border-t border-border">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search jewelry..."
                      className="pl-10 bg-muted/50"
                    />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-primary whitespace-nowrap">
            LUMIÈRE
          </h1>
          
          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-2xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for jewelry, diamonds, and more..."
                className="pl-10 pr-12 bg-muted/50 border-border focus-visible:ring-primary"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-muted"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-0.5 sm:gap-1">
            <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10 hover:bg-muted hover:text-primary">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10 hover:bg-muted hover:text-primary hidden xs:flex">
              <User className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative h-9 w-9 sm:h-10 sm:w-10 hover:bg-muted hover:text-primary">
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-accent text-accent-foreground text-[10px] sm:text-xs flex items-center justify-center font-semibold">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 py-3 overflow-x-auto border-t border-border/50 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              size="sm"
              className="whitespace-nowrap text-sm hover:text-accent hover:bg-accent/10 transition-all"
            >
              {category}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
