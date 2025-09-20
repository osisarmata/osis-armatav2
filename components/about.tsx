"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeader } from "@/components/section-header"
import { Card } from "@/components/ui/card"
import { Users, Award, Target, Heart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

function TextReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const [visibleWords, setVisibleWords] = useState(0)
  const words = text.split(" ")

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleWords((prev) => {
          if (prev >= words.length) {
            clearInterval(interval)
            return prev
          }
          return prev + 1
        })
      }, 100) // Reveal each word every 100ms

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [words.length, delay])

  return (
    <span>
      {words.map((word, index) => (
        <span
          key={index}
          className={cn(
            "inline-block transition-all duration-300",
            index < visibleWords ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  )
}

export function About() {
  const imageRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { t, isRTL } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const currentRef = imageRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible && imageRef.current) {
      // Initialize vanilla-tilt effect
      const element = imageRef.current
      let isHovering = false

      const handleMouseMove = (e: MouseEvent) => {
        if (!isHovering) return

        const rect = element.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -12
        const rotateY = ((x - centerX) / centerX) * 12

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
      }

      const handleMouseEnter = () => {
        isHovering = true
        element.style.transition = "transform 0.1s ease-out"
      }

      const handleMouseLeave = () => {
        isHovering = false
        element.style.transition = "transform 0.4s ease-out"
        element.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
      }

      element.addEventListener("mousemove", handleMouseMove)
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        element.removeEventListener("mousemove", handleMouseMove)
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [isVisible])

  const stats = [
    { icon: Users, label: t.about.stats.activeMembers, value: "48" },
    { icon: Award, label: t.about.stats.graduates, value: "1200+" },
    { icon: Target, label: t.about.stats.annualPrograms, value: "12" },
    { icon: Heart, label: t.about.stats.socialActivities, value: "24" },
  ]

  return (
    <SectionWrapper id="about" className={cn("bg-muted/30", isRTL && "rtl")}>
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
          isRTL && "lg:grid-flow-col-dense",
        )}
      >
        {/* Left Side - Image with Tilt Effect */}
        <div className={cn("order-2", isRTL ? "lg:order-2" : "lg:order-1")}>
          <div
            ref={imageRef}
            className={cn(
              "relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700",
              isVisible ? "animate-slide-in-left" : "opacity-0 translate-x-[-50px]",
            )}
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src="/indonesian-osis-student-council-group-photo-in-sch.jpg"
              alt="OSIS Armata Team"
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />

            {/* Flickering Grid Background Effect */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-white/20 animate-pulse"
                    style={{
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content with Text Reveal */}
        <div className={cn("order-1 space-y-8", isRTL ? "lg:order-1" : "lg:order-2")}>
          <div className={cn("transition-all duration-700 delay-300", isVisible ? "animate-fade-in-up" : "opacity-0")}>
            <SectionHeader title={t.about.title} subtitle={t.about.subtitle} centered={false} className="mb-8" />

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">{isVisible && <TextReveal text={t.about.description1} delay={800} />}</p>
              <p>{isVisible && <TextReveal text={t.about.description2} delay={1200} />}</p>
              <p>{isVisible && <TextReveal text={t.about.description3} delay={1600} />}</p>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className={cn(
                  "p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105",
                  isVisible ? "animate-fade-in-up" : "opacity-0",
                )}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
