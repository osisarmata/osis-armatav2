"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function Footer() {
  const { t, isRTL } = useLanguage()

  return (
    <footer className={cn("bg-card border-t border-border", isRTL && "rtl")}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">OSIS ARMATA</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.footer.description}</p>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.aboutUs}
                </a>
              </li>
              <li>
                <a href="#seksi" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.sectionsAndFields}
                </a>
              </li>
              <li>
                <a href="#kegiatan" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.activities}
                </a>
              </li>
              <li>
                <a href="#galeri" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#alumni" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.alumni}
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t.footer.featuredPrograms}</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">{t.footer.sportsAndArts}</li>
              <li className="text-muted-foreground">{t.footer.culturalFestival}</li>
              <li className="text-muted-foreground">{t.footer.socialService}</li>
              <li className="text-muted-foreground">{t.footer.motivationSeminar}</li>
              <li className="text-muted-foreground">{t.footer.artPerformance}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t.contact.title}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Jl. Pendidikan No. 123
                  <br />
                  Jakarta Selatan, 12345
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">(021) 1234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@osisarmata.sch.id</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
