"use client"

import { useState, useEffect, useRef } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { sampleData } from "@/lib/sample-data"
import { useLanguage } from "@/lib/language-context"

export function Galeri() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("galeri")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, element: HTMLElement) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 15
      const rotateY = (centerX - x) / 15

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    }

    const handleMouseLeave = (element: HTMLElement) => {
      element.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    }

    imageRefs.current.forEach((imageDiv) => {
      if (imageDiv) {
        const mouseMoveHandler = (e: MouseEvent) => handleMouseMove(e, imageDiv)
        const mouseLeaveHandler = () => handleMouseLeave(imageDiv)

        imageDiv.addEventListener("mousemove", mouseMoveHandler)
        imageDiv.addEventListener("mouseleave", mouseLeaveHandler)

        return () => {
          imageDiv.removeEventListener("mousemove", mouseMoveHandler)
          imageDiv.removeEventListener("mouseleave", mouseLeaveHandler)
        }
      }
    })
  }, [isVisible])

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + sampleData.galeri.length) % sampleData.galeri.length)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % sampleData.galeri.length)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
      if (e.key === "Escape") closeLightbox()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <SectionWrapper id="galeri">
      <SectionHeader title={t.gallery.title} subtitle={t.gallery.subtitle} />

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {sampleData.galeri.map((image, index) => (
          <div
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            className={cn(
              "break-inside-avoid cursor-pointer group transition-all duration-700",
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0",
            )}
            style={{
              animationDelay: `${index * 120}ms`,
              transformStyle: "preserve-3d",
              transition: "transform 0.4s ease-out",
            }}
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src={image || "/placeholder.svg"}
                alt={`Galeri OSIS Armata ${index + 1}`}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 animate-shimmer" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-lg transform hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-full animate-scale-in">
            <img
              src={sampleData.galeri[selectedImage] || "/placeholder.svg"}
              alt={`Galeri OSIS Armata ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              onClick={closeLightbox}
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              {selectedImage + 1} / {sampleData.galeri.length}
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  )
}
