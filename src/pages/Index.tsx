import { useState } from "react";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import heroImage from "@/assets/hero-jewelry.jpg";
import earring1 from "@/assets/earring-1.jpg";
import ring1 from "@/assets/ring-1.jpg";
import pendant1 from "@/assets/pendant-1.jpg";
import earring2 from "@/assets/earring-2.jpg";
import ring2 from "@/assets/ring-2.jpg";

const Index = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const products = [
    {
      id: "1",
      name: "Royal Filigree Diamond Drop Earrings",
      price: 94216,
      image: earring1,
      metal: "Rose Gold",
    },
    {
      id: "2",
      name: "Abstract Embrace Diamond Ring",
      price: 72959,
      image: ring1,
      metal: "White Gold",
    },
    {
      id: "3",
      name: "Eternal Heart Diamond Pendant",
      price: 45890,
      image: pendant1,
      metal: "Rose Gold",
    },
    {
      id: "4",
      name: "Classic Diamond Stud Earrings",
      price: 88506,
      image: earring2,
      metal: "Platinum",
    },
    {
      id: "5",
      name: "Vintage Halo Diamond Ring",
      price: 125000,
      image: ring2,
      metal: "Yellow Gold",
    },
    {
      id: "6",
      name: "Royal Filigree Diamond Drop Earrings",
      price: 94216,
      image: earring1,
      metal: "Rose Gold",
    },
    {
      id: "7",
      name: "Abstract Embrace Diamond Ring",
      price: 72959,
      image: ring1,
      metal: "White Gold",
    },
    {
      id: "8",
      name: "Eternal Heart Diamond Pendant",
      price: 45890,
      image: pendant1,
      metal: "Rose Gold",
    },
  ];

  const priceCategories = [
    { label: "Earrings Under 50K", image: earring2 },
    { label: "Pendants Under 50K", image: pendant1 },
    { label: "Rings Under 50K", image: ring1 },
    { label: "Gifts Under 25K", image: earring1 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury Diamond Jewelry Collection - Timeless Elegance"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-xl lg:max-w-2xl text-primary-foreground">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 animate-in fade-in slide-in-from-left duration-700 leading-tight">
                Timeless Elegance
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 animate-in fade-in slide-in-from-left duration-700 delay-150 font-light">
                Discover our exquisite collection of diamond jewelry
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="animate-in fade-in slide-in-from-left duration-700 delay-300 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Price Categories */}
      <section className="py-8 sm:py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {priceCategories.map((category) => (
              <div
                key={category.label}
                className="group relative rounded-full aspect-square overflow-hidden border-2 sm:border-4 border-border hover:border-accent transition-all duration-300 cursor-pointer bg-background shadow-sm hover:shadow-elegant"
              >
                <img
                  src={category.image}
                  alt={category.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center p-2">
                  <span className="text-primary-foreground font-serif font-semibold text-center text-xs sm:text-sm md:text-base leading-tight">
                    {category.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb & Product Count */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
          <span className="hover:text-foreground cursor-pointer transition-colors">Home</span>
          <span>/</span>
          <span className="text-foreground font-medium">Diamond</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-1 sm:mb-2 text-foreground">
          Diamond Collection
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base">12,698 results</p>
      </div>

      {/* Filters & Sort Bar */}
      <div className="bg-muted/20 border-y border-border sticky top-[60px] sm:top-[72px] lg:top-[140px] z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1">
              {/* Mobile Filter Button */}
              <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all whitespace-nowrap lg:hidden">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] sm:w-[320px] p-0">
                  <div className="h-full overflow-y-auto">
                    <FilterSidebar />
                  </div>
                </SheetContent>
              </Sheet>
              
              <Button variant="secondary" size="sm" className="hover:bg-secondary/80 whitespace-nowrap text-xs sm:text-sm">
                ₹ Under 50K
              </Button>
              <Button variant="secondary" size="sm" className="hover:bg-secondary/80 whitespace-nowrap text-xs sm:text-sm hidden sm:inline-flex">
                Women
              </Button>
              <Button variant="secondary" size="sm" className="hover:bg-secondary/80 whitespace-nowrap text-xs sm:text-sm hidden md:inline-flex">
                Earrings
              </Button>
              <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 hover:bg-accent/10 whitespace-nowrap text-xs sm:text-sm">
                +More
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="gap-1 sm:gap-2 hover:bg-muted whitespace-nowrap text-xs sm:text-sm">
              <span className="hidden sm:inline">Sort:</span>
              <span className="text-xs sm:text-sm">Best</span>
              <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <div className="flex gap-6 lg:gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>
          
          {/* Product Grid */}
          <main className="flex-1 min-w-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 sm:mt-12 md:mt-16 text-center">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 sm:px-12 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                Load More Products
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
