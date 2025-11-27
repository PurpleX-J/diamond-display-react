import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 200000]);

  const filterSections = [
    {
      title: "Product Type",
      options: ["Rings", "Earrings", "Pendants", "Necklaces", "Bracelets"],
    },
    {
      title: "Metal",
      options: ["Gold", "Rose Gold", "White Gold", "Platinum", "Silver"],
    },
    {
      title: "Occasion",
      options: ["Engagement", "Wedding", "Daily Wear", "Party", "Gifting"],
    },
    {
      title: "Gender",
      options: ["Women", "Men", "Unisex"],
    },
  ];

  return (
    <aside className="hidden lg:block w-72 bg-card/50 border-r border-border p-6 overflow-y-auto h-[calc(100vh-220px)] sticky top-[140px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-serif font-semibold text-foreground">Filters</h2>
        <Button variant="ghost" size="sm" className="text-xs text-accent hover:text-accent/80 hover:bg-accent/10">
          Clear All
        </Button>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4 flex items-center justify-between text-foreground">
          Price Range
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={200000}
            step={1000}
            className="mb-4"
          />
          <div className="flex items-center justify-between text-sm font-medium">
            <span className="text-foreground">₹{priceRange[0].toLocaleString()}</span>
            <span className="text-foreground">₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Filter Sections */}
      {filterSections.map((section, index) => (
        <div key={section.title} className="mb-7">
          <h3 className="font-semibold mb-4 flex items-center justify-between text-foreground">
            {section.title}
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </h3>
          <div className="space-y-3">
            {section.options.map((option) => (
              <div key={option} className="flex items-center gap-3 group">
                <Checkbox id={`${section.title}-${option}`} className="border-border data-[state=checked]:bg-primary" />
                <label
                  htmlFor={`${section.title}-${option}`}
                  className="text-sm cursor-pointer text-foreground group-hover:text-primary transition-colors flex-1"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
          {index < filterSections.length - 1 && <Separator className="mt-7 bg-border/50" />}
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;
