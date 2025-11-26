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
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-elegant">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-serif font-bold text-primary">
              LUMIÈRE
            </h1>
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for jewelry, diamonds, and more..."
                  className="pl-10 pr-10 bg-muted/50 border-none"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-1 py-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="whitespace-nowrap text-sm hover:text-accent transition-colors"
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
