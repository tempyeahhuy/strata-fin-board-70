import { Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useFont } from "@/hooks/useFont";

export const FontToggle = () => {
  const { currentFont, fontOptions, switchFont } = useFont();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-10 w-10">
          <Type className="h-5 w-5" />
          <span className="sr-only">Toggle font</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Choose Font
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {fontOptions.map((font) => (
          <DropdownMenuItem
            key={font.value}
            onClick={() => switchFont(font)}
            className={`cursor-pointer ${font.class} ${
              currentFont.value === font.value 
                ? 'bg-accent text-accent-foreground' 
                : ''
            }`}
          >
            <span className="font-medium">{font.name}</span>
            {currentFont.value === font.value && (
              <span className="ml-auto h-2 w-2 rounded-full bg-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};