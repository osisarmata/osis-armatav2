"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, Globe, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import type { Language } from "@/lib/i18n"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "en", name: "English", flag: "🇺🇸" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { language, setLanguage, t, isRTL } = useLanguage()

  const navItems = [
    { id: "home", label: t.nav.home, href: "#home" },
    { id: "about", label: t.nav.about, href: "#about" },
    { id: "galeri", label: t.nav.gallery, href: "#galeri" },
    { id: "seksi", label: t.nav.sections, href: "#seksi" },
    { id: "kegiatan", label: t.nav.activities, href: "#kegiatan" },
    { id: "alumni", label: t.nav.alumni, href: "#alumni" },
    { id: "hubungi", label: t.nav.contact, href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <>
      {/* Desktop Floating Navbar */}
      <nav
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out hidden md:block",
          isScrolled
            ? "scale-95 backdrop-blur-md bg-background/80 border border-border shadow-lg"
            : "scale-100 bg-transparent",
          isRTL && "rtl",
        )}
      >
        <div
          className={cn("flex items-center gap-1 transition-all duration-300", isScrolled ? "px-4 py-2" : "px-6 py-3")}
        >
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.href)}
              className="text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              {item.label}
            </Button>
          ))}

          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="hover:bg-primary/10">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-primary/10 gap-1">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{currentLanguage?.flag}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[180px]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn("gap-2", language === lang.code && "bg-primary/10")}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-b border-border",
          isRTL && "rtl",
        )}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div className="font-bold text-lg text-primary">OSIS ARMATA</div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{currentLanguage?.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn("gap-2", language === lang.code && "bg-primary/10")}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="justify-start px-4 py-3 text-left"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
