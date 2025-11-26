import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  metal?: string;
}

const ProductCard = ({ id, name, price, image, metal }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:shadow-hover transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            "absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background transition-all",
            isWishlisted && "text-destructive"
          )}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart
            className={cn("h-5 w-5", isWishlisted && "fill-current")}
          />
        </Button>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="secondary" size="sm">
            Quick View
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-serif font-medium text-base mb-1 line-clamp-2 group-hover:text-accent transition-colors">
          {name}
        </h3>
        {metal && (
          <p className="text-xs text-muted-foreground mb-2">{metal}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">
            ₹{price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
