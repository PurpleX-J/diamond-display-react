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
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury Diamond Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-primary-foreground">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-in fade-in slide-in-from-left duration-700">
                Timeless Elegance
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-in fade-in slide-in-from-left duration-700 delay-150">
                Discover our exquisite collection of diamond jewelry
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="animate-in fade-in slide-in-from-left duration-700 delay-300"
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Price Categories */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {priceCategories.map((category) => (
              <div
                key={category.label}
                className="group relative rounded-full aspect-square overflow-hidden border-4 border-border hover:border-accent transition-all duration-300 cursor-pointer bg-background"
              >
                <img
                  src={category.image}
                  alt={category.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-semibold text-center px-4">
                    {category.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb & Product Count */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Home</span>
            <span>/</span>
            <span className="text-foreground font-medium">Diamond</span>
          </div>
        </div>
        <h2 className="text-3xl font-serif font-bold mt-4 mb-2">
          Diamond Collection
        </h2>
        <p className="text-muted-foreground">12,698 results</p>
      </div>

      {/* Filters & Sort Bar */}
      <div className="bg-muted/30 border-y border-border sticky top-[180px] z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <Button variant="outline" size="sm" className="gap-2">
                Filter
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="sm">
                ₹ Under 50,000
              </Button>
              <Button variant="secondary" size="sm">
                Women
              </Button>
              <Button variant="secondary" size="sm">
                Earrings
              </Button>
              <Button variant="ghost" size="sm" className="text-accent">
                +Show More
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort By:</span>
              <Button variant="ghost" size="sm" className="gap-2">
                Best Matches
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <FilterSidebar />
          
          {/* Product Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline">
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
