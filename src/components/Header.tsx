import { Search, Heart, ShoppingCart, User, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
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
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4 gap-4">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary whitespace-nowrap">
            LUMIÈRE
          </h1>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl">
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
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="hover:bg-muted hover:text-primary">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-muted hover:text-primary">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-muted hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-semibold">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-1 py-3 overflow-x-auto border-t border-border/50 scrollbar-hide">
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
