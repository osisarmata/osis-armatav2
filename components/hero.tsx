"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

const heroImages = [
  "/indonesian-students-in-school-uniforms-group-photo.jpg",
  "/osis-student-council-meeting-discussion.jpg",
  "/indonesian-school-cultural-event-performance.jpg",
  "/student-leadership-training-workshop.jpg",
  "/indonesian-school-sports-competition.jpg",
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const { t, isRTL } = useLanguage()

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  return (
    <section
      id="home"
      className={cn("relative h-screen flex items-center justify-center overflow-hidden", isRTL && "rtl")}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100" : "opacity-0",
            )}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`OSIS Armata ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 font-medium">{t.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3">
              {t.hero.joinButton}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 bg-transparent"
            >
              {t.hero.activitiesButton}
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={goToPrevious}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors",
          isRTL ? "right-4" : "left-4",
        )}
        aria-label="Previous image"
      >
        {isRTL ? <ChevronRight className="h-6 w-6 text-white" /> : <ChevronLeft className="h-6 w-6 text-white" />}
      </button>

      <button
        onClick={goToNext}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors",
          isRTL ? "left-4" : "right-4",
        )}
        aria-label="Next image"
      >
        {isRTL ? <ChevronLeft className="h-6 w-6 text-white" /> : <ChevronRight className="h-6 w-6 text-white" />}
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className={cn("absolute bottom-8 z-20 animate-bounce", isRTL ? "left-8" : "right-8")}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/75 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
