"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const { t } = useLanguage()
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, element: HTMLElement) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ nama: "", email: "", pesan: "" })

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.address,
      content: "Jl. Pendidikan No. 123\nJakarta Selatan, 12345",
    },
    {
      icon: Phone,
      title: t.contact.phone,
      content: "(021) 1234-5678",
    },
    {
      icon: Mail,
      title: t.contact.email,
      content: "info@osisarmata.sch.id",
    },
    {
      icon: Clock,
      title: t.contact.operatingHours,
      content: t.contact.mondayFriday,
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <SectionWrapper id="contact">
      <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Enhanced Contact Form */}
        <Card className="bg-card border-border animate-fade-up shadow-lg hover:shadow-xl transition-all duration-500">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              {t.contact.sendMessage}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 group">
                <Label htmlFor="nama" className="group-focus-within:text-primary transition-colors">
                  {t.contact.fullName}
                </Label>
                <Input
                  id="nama"
                  name="nama"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  value={formData.nama}
                  onChange={handleInputChange}
                  required
                  className="bg-background transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                />
              </div>

              <div className="space-y-2 group">
                <Label htmlFor="email" className="group-focus-within:text-primary transition-colors">
                  {t.contact.email}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Masukkan alamat email Anda"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                />
              </div>

              <div className="space-y-2 group">
                <Label htmlFor="pesan" className="group-focus-within:text-primary transition-colors">
                  {t.contact.message}
                </Label>
                <Textarea
                  id="pesan"
                  name="pesan"
                  placeholder="Tulis pesan Anda di sini..."
                  value={formData.pesan}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-background resize-none transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                />
              </div>

              <Button
                type="submit"
                className="w-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                    {t.contact.sending}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    {t.contact.sendMessage}
                  </div>
                )}
              </Button>

              {submitStatus === "success" && (
                <div className="text-center text-green-600 font-medium animate-fade-in bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  {t.contact.successMessage}
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="bg-card border-border animate-fade-up hover:shadow-lg transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Social Media */}
          <Card
            className="bg-card border-border animate-fade-up shadow-lg hover:shadow-xl transition-all duration-500"
            style={{ animationDelay: "400ms" }}
          >
            <CardContent className="p-6">
              <h4 className="font-semibold text-foreground mb-4">{t.contact.followUs}</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-primary/10 hover:bg-primary hover:text-primary-foreground p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Map Placeholder */}
          <Card
            className="bg-card border-border animate-fade-up shadow-lg hover:shadow-xl transition-all duration-500"
            style={{ animationDelay: "500ms" }}
          >
            <CardContent className="p-0">
              <div className="h-48 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center group cursor-pointer hover:from-primary/5 hover:to-primary/10 transition-all duration-500">
                <div className="text-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  <MapPin className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-sm font-medium">{t.contact.schoolLocation}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  )
}
