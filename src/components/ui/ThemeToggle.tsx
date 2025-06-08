"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { Moon, Sun, Laptop } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = resolvedTheme ?? "system";
  const cycle = {
    light: "dark",
    dark: "system",
    system: "light",
  };

  const nextTheme = cycle[current as keyof typeof cycle];

  const Icon =
    current === "light" ? (
      <Sun className="h-5 w-5" />
    ) : current === "dark" ? (
      <Moon className="h-5 w-5" />
    ) : (
      <Laptop className="h-5 w-5" />
    );

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => nextTheme && setTheme(nextTheme)}
      // title={`Switch to ${nextTheme}`}
    >
      {Icon}
    </Button>
  );
}
