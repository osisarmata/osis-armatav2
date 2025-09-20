"use client"

import { useState, useRef, useEffect } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import { sampleData } from "@/lib/sample-data"
import { useLanguage } from "@/lib/language-context"

export function Kegiatan() {
  const [selectedKegiatan, setSelectedKegiatan] = useState<(typeof sampleData.kegiatan)[0] | null>(null)
  const { t } = useLanguage()
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, element: HTMLElement) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    }

    const handleMouseLeave = (element: HTMLElement) => {
      element.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    }

    cardRefs.current.forEach((card) => {
      if (card) {
        const mouseMoveHandler = (e: MouseEvent) => handleMouseMove(e, card)
        const mouseLeaveHandler = () => handleMouseLeave(card)

        card.addEventListener("mousemove", mouseMoveHandler)
        card.addEventListener("mouseleave", mouseLeaveHandler)

        return () => {
          card.removeEventListener("mousemove", mouseMoveHandler)
          card.removeEventListener("mouseleave", mouseLeaveHandler)
        }
      }
    })
  }, [])

  return (
    <SectionWrapper id="kegiatan" className="bg-muted/30">
      <SectionHeader title={t.activities.title} subtitle={t.activities.subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {sampleData.kegiatan.map((kegiatan, index) => (
          <Card
            key={kegiatan.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="group cursor-pointer transition-all duration-500 hover:shadow-2xl bg-card border-border overflow-hidden animate-fade-up"
            style={{
              animationDelay: `${index * 150}ms`,
              transformStyle: "preserve-3d",
              transition: "transform 0.3s ease-out",
            }}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img
                  src={kegiatan.foto || "/placeholder.svg"}
                  alt={kegiatan.judul}
                  className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 animate-shimmer" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                        onClick={() => setSelectedKegiatan(kegiatan)}
                      >
                        {t.activities.viewDetails}
                        <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          {t.activities.activityDetails}
                        </DialogTitle>
                      </DialogHeader>
                      {selectedKegiatan && (
                        <div className="space-y-4">
                          <img
                            src={selectedKegiatan.foto || "/placeholder.svg"}
                            alt={selectedKegiatan.judul}
                            className="w-full h-48 object-cover rounded-lg"
                          />

                          <div>
                            <h3 className="font-bold text-xl mb-2">{selectedKegiatan.judul}</h3>
                            <Badge variant="outline" className="mb-3">
                              {selectedKegiatan.tanggal}
                            </Badge>
                            <p className="text-muted-foreground leading-relaxed">{selectedKegiatan.deskripsi}</p>
                          </div>

                          <div className="space-y-2 pt-4 border-t border-border">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span className="font-medium">{t.activities.time}</span>
                              <span>{selectedKegiatan.tanggal}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span className="font-medium">{t.activities.location}</span>
                              <span>{t.activities.schoolEnvironment}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="h-4 w-4 text-primary" />
                              <span className="font-medium">{t.activities.participants}</span>
                              <span>{t.activities.allStudents}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4 transform transition-all duration-300 group-hover:scale-110">
                  <Badge variant="secondary" className="bg-white/95 text-primary backdrop-blur-sm">
                    {kegiatan.tanggal}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {kegiatan.judul}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">{kegiatan.deskripsi}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {kegiatan.tanggal}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium group/btn"
                  >
                    Selengkapnya
                    <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: "800ms" }}>
        <p className="text-muted-foreground mb-4">{t.activities.joinQuestion}</p>
        <Button
          size="lg"
          className="font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {t.activities.contactUs}
        </Button>
      </div>
    </SectionWrapper>
  )
}
