import { useState } from "react";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";
import earring1 from "@/assets/earring-1.jpg";
import ring1 from "@/assets/ring-1.jpg";
import pendant1 from "@/assets/pendant-1.jpg";
import earring2 from "@/assets/earring-2.jpg";
import ring2 from "@/assets/ring-2.jpg";

const Index = () => {
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
      <section className="relative h-[600px] overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury Diamond Jewelry Collection - Timeless Elegance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl text-primary-foreground">
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-in fade-in slide-in-from-left duration-700 leading-tight">
                Timeless Elegance
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-in fade-in slide-in-from-left duration-700 delay-150 font-light">
                Discover our exquisite collection of diamond jewelry
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="animate-in fade-in slide-in-from-left duration-700 delay-300 text-base px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Price Categories */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {priceCategories.map((category) => (
              <div
                key={category.label}
                className="group relative rounded-full aspect-square overflow-hidden border-4 border-border hover:border-accent transition-all duration-300 cursor-pointer bg-background shadow-sm hover:shadow-elegant"
              >
                <img
                  src={category.image}
                  alt={category.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-semibold text-center px-4 text-sm md:text-base">
                    {category.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb & Product Count */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="hover:text-foreground cursor-pointer transition-colors">Home</span>
          <span>/</span>
          <span className="text-foreground font-medium">Diamond</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2 text-foreground">
          Diamond Collection
        </h2>
        <p className="text-muted-foreground text-base">12,698 results</p>
      </div>

      {/* Filters & Sort Bar */}
      <div className="bg-muted/20 border-y border-border sticky top-[140px] z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <Button variant="outline" size="sm" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all">
                Filter
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="sm" className="hover:bg-secondary/80">
                ₹ Under 50,000
              </Button>
              <Button variant="secondary" size="sm" className="hover:bg-secondary/80">
                Women
              </Button>
              <Button variant="secondary" size="sm" className="hover:bg-secondary/80">
                Earrings
              </Button>
              <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 hover:bg-accent/10">
                +Show More
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground font-medium">Sort By:</span>
              <Button variant="ghost" size="sm" className="gap-2 hover:bg-muted">
                Best Matches
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="flex gap-8">
          <FilterSidebar />
          
          {/* Product Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-16 text-center">
              <Button size="lg" variant="outline" className="px-12 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
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
