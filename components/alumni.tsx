"use client"

import { useEffect, useRef, useState } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { sampleData } from "@/lib/sample-data"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function Alumni() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const { t, language, isRTL } = useLanguage()

  // Get testimonials for current language
  const testimonials = sampleData.alumni[language] || sampleData.alumni.id
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const handleMouseEnter = () => setIsPaused(true)
    const handleMouseLeave = () => setIsPaused(false)

    marquee.addEventListener("mouseenter", handleMouseEnter)
    marquee.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      marquee.removeEventListener("mouseenter", handleMouseEnter)
      marquee.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <SectionWrapper id="alumni" className={cn("bg-muted/30 overflow-hidden", isRTL && "rtl")}>
      <SectionHeader title={t.alumni.title} subtitle={t.alumni.subtitle} />

      <div className="relative">
        {/* Gradient Overlays */}
        <div
          className={cn(
            "absolute top-0 bottom-0 w-20 z-10",
            isRTL ? "right-0 bg-gradient-to-l" : "left-0 bg-gradient-to-r",
            "from-muted/30 to-transparent",
          )}
        />
        <div
          className={cn(
            "absolute top-0 bottom-0 w-20 z-10",
            isRTL ? "left-0 bg-gradient-to-r" : "right-0 bg-gradient-to-l",
            "from-muted/30 to-transparent",
          )}
        />

        {/* Marquee Container */}
        <div
          ref={marqueeRef}
          className={cn("flex gap-6 hover:pause-animation", isRTL ? "animate-marquee-rtl" : "animate-marquee")}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
            animationDuration: "60s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-80 bg-card border-border shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-60" />
                <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">"{testimonial}"</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{String.fromCharCode(65 + (index % 26))}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.alumni.alumniOsis}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.alumni.class} {2020 + (index % 4)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">{t.alumni.shareQuestion}</p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          {t.activities.contactUs}
        </a>
      </div>
    </SectionWrapper>
  )
}
