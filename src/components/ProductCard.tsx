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
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:shadow-elegant hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted/20">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            "absolute top-2 right-2 sm:top-3 sm:right-3 h-8 w-8 sm:h-9 sm:w-9 bg-background/90 backdrop-blur-sm hover:bg-background hover:scale-110 transition-all duration-200 shadow-sm",
            isWishlisted && "text-destructive"
          )}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart
            className={cn("h-3.5 w-3.5 sm:h-4 sm:w-4", isWishlisted && "fill-current")}
          />
        </Button>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
          <Button variant="secondary" size="sm" className="shadow-lg text-xs sm:text-sm">
            Quick View
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 md:p-5">
        <h3 className="font-serif font-medium text-sm sm:text-base mb-1 sm:mb-1.5 line-clamp-2 text-foreground group-hover:text-primary transition-colors leading-snug">
          {name}
        </h3>
        {metal && (
          <p className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 sm:mb-2.5 font-medium">{metal}</p>
        )}
        <div className="flex items-center justify-between mt-1 sm:mt-2">
          <span className="text-base sm:text-lg font-bold text-primary">
            ₹{price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
