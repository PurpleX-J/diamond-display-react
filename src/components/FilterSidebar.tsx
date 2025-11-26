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
    <aside className="w-64 bg-card border-r border-border p-6 overflow-y-auto h-[calc(100vh-180px)] sticky top-[180px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-serif font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
          Clear All
        </Button>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="font-medium mb-4 flex items-center justify-between">
          Price Range
          <ChevronDown className="h-4 w-4" />
        </h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={200000}
            step={1000}
            className="mb-2"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Filter Sections */}
      {filterSections.map((section, index) => (
        <div key={section.title} className="mb-6">
          <h3 className="font-medium mb-4 flex items-center justify-between">
            {section.title}
            <ChevronDown className="h-4 w-4" />
          </h3>
          <div className="space-y-3">
            {section.options.map((option) => (
              <div key={option} className="flex items-center gap-2">
                <Checkbox id={`${section.title}-${option}`} />
                <label
                  htmlFor={`${section.title}-${option}`}
                  className="text-sm cursor-pointer hover:text-primary transition-colors"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
          {index < filterSections.length - 1 && <Separator className="mt-6" />}
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;
