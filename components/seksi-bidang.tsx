"use client"

import { useState } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Mail, Users } from "lucide-react"
import { sampleData } from "@/lib/sample-data"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function SeksiBidang() {
  const [selectedMember, setSelectedMember] = useState<any>(null)
  const [selectedBidang, setSelectedBidang] = useState<any>(null)
  const { t, isRTL } = useLanguage()

  return (
    <SectionWrapper id="seksi" className={cn(isRTL && "rtl")}>
      <SectionHeader title={t.sections.title} subtitle={t.sections.subtitle} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {sampleData.bidang.map((bidang, index) => (
          <Card
            key={bidang.id}
            className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card border-border overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={bidang.fotoBersama || "/placeholder.svg?height=200&width=400"}
                  alt={`Tim ${bidang.nama}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{bidang.nama}</h3>
                  <p className="text-sm text-white/80">{bidang.anggota.length} Anggota</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{bidang.deskripsi}</p>

                <div className="flex -space-x-2 mb-6">
                  {bidang.anggota.map((member, idx) => (
                    <img
                      key={member.id}
                      src={member.foto || "/placeholder.svg"}
                      alt={member.nama}
                      className="w-10 h-10 rounded-full border-2 border-background object-cover"
                      style={{ zIndex: bidang.anggota.length - idx }}
                    />
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 bg-transparent"
                      onClick={() => setSelectedBidang(bidang)}
                    >
                      Lihat Detail Bidang
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        {selectedBidang?.nama}
                      </DialogTitle>
                    </DialogHeader>
                    {selectedBidang && (
                      <div className="space-y-6">
                        <div className="relative h-64 rounded-lg overflow-hidden">
                          <img
                            src={selectedBidang.fotoBersama || "/placeholder.svg?height=300&width=600"}
                            alt={`Tim ${selectedBidang.nama}`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <p className="text-muted-foreground">{selectedBidang.deskripsi}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedBidang.anggota.map((member: any) => (
                            <Card key={member.id} className="p-4">
                              <div className="flex items-start gap-3">
                                <img
                                  src={member.foto || "/placeholder.svg"}
                                  alt={member.nama}
                                  className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-sm">{member.nama}</h4>
                                  <Badge variant="secondary" className="text-xs mb-2">
                                    {member.role}
                                  </Badge>
                                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{member.deskripsi}</p>
                                  <div className="flex items-center gap-1">
                                    <Mail className="h-3 w-3 text-primary" />
                                    <p className="text-xs text-muted-foreground truncate">{member.kontak}</p>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
