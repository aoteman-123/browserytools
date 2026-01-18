"use client";

import { Button } from "./ui/button";
import { Hammer, Github, Coffee, Menu } from "lucide-react";
import { XLogo } from "@phosphor-icons/react";
import { useToolStore } from "@/store/tool-store";
import Logo from "./logo";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import { ThemeSwitcher } from "./theme-switcher";

export default function Header() {
  const pathname = usePathname();
  const { currentTool, setCurrentTool } = useToolStore();

  // Reset tool context when not on tools routes
  useEffect(() => {
    if (!pathname.startsWith("/tools")) {
      setCurrentTool(null);
    }
  }, [pathname, setCurrentTool]);

  const handleRequestTool = () => {
    const issueTitle = encodeURIComponent("Tool Request: [Tool Name]");
    const issueBody = encodeURIComponent(
      `
## Tool Request

**Tool Name:** 
**Description:** 
**Use Case:** 
**Priority:** Low/Medium/High

**Additional Details:**
Please describe what this tool should do and how it would help users.
    `.trim()
    );

    const githubUrl = `https://github.com/aghyad97/softstash/issues/new?title=${issueTitle}&body=${issueBody}&labels=tool-request`;

    window.open(githubUrl, "_blank");
  };

  return (
    <header className="border-b bg-white/40 dark:bg-black/40 backdrop-blur-lg">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Mobile menu button and Tool Title */}
        <div className="flex items-center gap-3">
          {/* Mobile menu button - only visible on mobile */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <Sidebar />
              </SheetContent>
            </Sheet>
          </div>

          <Link
            href="/"
            className="flex items-center"
            aria-label="Go to homepage"
          >
            {currentTool ? (
              <div>
                <h1 className="text-sm md:text-md font-semibold">
                  {currentTool.name}
                </h1>
              </div>
            ) : (
              <div className="flex flex-row gap-2">
                <Logo />
                <h1 className="text-sm md:text-xl font-semibold">
                  SoftStash
                </h1>
              </div>
            )}
          </Link>
        </div>

        {/* Social links on the right */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop social links */}
          <div className="hidden sm:flex items-center gap-2">
            <ThemeSwitcher />
          </div>



          {/* Mobile request tool button */}
          <ThemeSwitcher className="sm:hidden" variant="outline" />

          {/* Coffee button - smaller on mobile */}
        </div>
      </div>
    </header>
  );
}
