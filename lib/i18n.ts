export type Language = "id" | "ar" | "en"

export interface Translations {
  nav: {
    home: string
    about: string
    gallery: string
    sections: string
    activities: string
    alumni: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    joinButton: string
    activitiesButton: string
  }
  about: {
    title: string
    subtitle: string
    description1: string
    description2: string
    description3: string
    stats: {
      activeMembers: string
      graduates: string
      annualPrograms: string
      socialActivities: string
    }
  }
  sections: {
    title: string
    subtitle: string
    viewDetails: string
    memberDetails: string
    responsibilities: string
    contact: string
  }
  activities: {
    title: string
    subtitle: string
    viewDetails: string
    activityDetails: string
    time: string
    location: string
    participants: string
    schoolEnvironment: string
    allStudents: string
    joinQuestion: string
    contactUs: string
  }
  gallery: {
    title: string
    subtitle: string
  }
  alumni: {
    title: string
    subtitle: string
    alumniOsis: string
    class: string
    shareQuestion: string
  }
  contact: {
    title: string
    subtitle: string
    sendMessage: string
    fullName: string
    email: string
    message: string
    send: string
    sending: string
    successMessage: string
    address: string
    phone: string
    operatingHours: string
    mondayFriday: string
    followUs: string
    schoolLocation: string
  }
  footer: {
    description: string
    quickLinks: string
    aboutUs: string
    sectionsAndFields: string
    featuredPrograms: string
    sportsAndArts: string
    culturalFestival: string
    socialService: string
    motivationSeminar: string
    artPerformance: string
    copyright: string
  }
}

export const translations: Record<Language, Translations> = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      gallery: "Galeri",
      sections: "Seksi",
      activities: "Kegiatan",
      alumni: "Alumni",
      contact: "Hubungi",
    },
    hero: {
      title: "OSIS ARMATA",
      subtitle: "Membangun Karakter, Mengembangkan Potensi, Mewujudkan Prestasi",
      joinButton: "Gabung OSIS",
      activitiesButton: "Lihat Kegiatan",
    },
    about: {
      title: "Tentang OSIS Armata",
      subtitle: "Organisasi yang berkomitmen membangun karakter dan mengembangkan potensi siswa",
      description1:
        "OSIS Armata adalah organisasi siswa intra sekolah yang berdedikasi untuk mengembangkan potensi kepemimpinan, kreativitas, dan karakter siswa melalui berbagai program dan kegiatan yang inovatif.",
      description2:
        "Dengan semangat gotong royong dan nilai-nilai luhur Pancasila, kami berkomitmen untuk menciptakan lingkungan sekolah yang kondusif, harmonis, dan penuh prestasi. Setiap program yang kami jalankan dirancang untuk membentuk generasi muda yang berkarakter, berprestasi, dan siap menghadapi tantangan masa depan.",
      description3:
        "Bergabunglah dengan kami dalam mewujudkan visi sekolah yang unggul dan menjadi bagian dari perubahan positif untuk kemajuan pendidikan Indonesia.",
      stats: {
        activeMembers: "Anggota Aktif",
        graduates: "Jumlah Lulusan",
        annualPrograms: "Program Tahunan",
        socialActivities: "Kegiatan Sosial",
      },
    },
    sections: {
      title: "Seksi & Bidang",
      subtitle: "Tim kepemimpinan OSIS Armata yang berdedikasi untuk kemajuan organisasi dan sekolah",
      viewDetails: "Lihat Detail",
      memberDetails: "Detail Anggota",
      responsibilities: "Tugas & Tanggung Jawab",
      contact: "Kontak",
    },
    activities: {
      title: "Kegiatan & Program",
      subtitle: "Berbagai program dan kegiatan yang telah dan akan dilaksanakan OSIS Armata",
      viewDetails: "Lihat Detail",
      activityDetails: "Detail Kegiatan",
      time: "Waktu:",
      location: "Lokasi:",
      participants: "Peserta:",
      schoolEnvironment: "Lingkungan Sekolah",
      allStudents: "Seluruh Siswa",
      joinQuestion: "Ingin berpartisipasi dalam kegiatan OSIS Armata?",
      contactUs: "Hubungi Kami",
    },
    gallery: {
      title: "Galeri",
      subtitle: "Dokumentasi kegiatan dan momen berharga OSIS Armata",
    },
    alumni: {
      title: "Kata Alumni",
      subtitle: "Testimoni dari para alumni OSIS Armata",
      alumniOsis: "Alumni OSIS",
      class: "Angkatan",
      shareQuestion: "Ingin berbagi pengalaman Anda sebagai alumni OSIS Armata?",
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Jangan ragu untuk menghubungi kami jika ada pertanyaan atau saran",
      sendMessage: "Kirim Pesan",
      fullName: "Nama Lengkap",
      email: "Email",
      message: "Pesan",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      successMessage: "Pesan berhasil dikirim! Terima kasih.",
      address: "Alamat",
      phone: "Telepon",
      operatingHours: "Jam Operasional",
      mondayFriday: "Senin - Jumat\n07:00 - 15:00 WIB",
      followUs: "Ikuti Kami",
      schoolLocation: "Peta Lokasi Sekolah",
    },
    footer: {
      description:
        "Organisasi Siswa Intra Sekolah yang berkomitmen untuk mengembangkan potensi siswa dan membangun karakter pemimpin masa depan.",
      quickLinks: "Tautan Cepat",
      aboutUs: "Tentang Kami",
      sectionsAndFields: "Seksi & Bidang",
      featuredPrograms: "Program Unggulan",
      sportsAndArts: "Pekan Olahraga & Seni",
      culturalFestival: "Festival Budaya",
      socialService: "Bakti Sosial",
      motivationSeminar: "Seminar Motivasi",
      artPerformance: "Pentas Seni",
      copyright: "© 2024 OSIS Armata. Semua hak cipta dilindungi undang-undang.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "حول",
      gallery: "المعرض",
      sections: "الأقسام",
      activities: "الأنشطة",
      alumni: "الخريجون",
      contact: "اتصل",
    },
    hero: {
      title: "OSIS ARMATA",
      subtitle: "بناء الشخصية، تطوير الإمكانات، تحقيق الإنجازات",
      joinButton: "انضم إلى OSIS",
      activitiesButton: "عرض الأنشطة",
    },
    about: {
      title: "حول OSIS Armata",
      subtitle: "منظمة ملتزمة ببناء الشخصية وتطوير إمكانات الطلاب",
      description1:
        "OSIS Armata هي منظمة طلابية داخل المدرسة مكرسة لتطوير إمكانات القيادة والإبداع وشخصية الطلاب من خلال برامج وأنشطة مبتكرة متنوعة.",
      description2:
        "بروح التعاون والقيم النبيلة لبانتشاسيلا، نحن ملتزمون بخلق بيئة مدرسية مواتية ومتناغمة ومليئة بالإنجازات. كل برنامج ننفذه مصمم لتشكيل جيل شاب ذو شخصية وإنجازات وجاهز لمواجهة تحديات المستقبل.",
      description3: "انضم إلينا في تحقيق رؤية مدرسة متميزة وكن جزءًا من التغيير الإيجابي لتقدم التعليم الإندونيسي.",
      stats: {
        activeMembers: "الأعضاء النشطون",
        graduates: "عدد الخريجين",
        annualPrograms: "البرامج السنوية",
        socialActivities: "الأنشطة الاجتماعية",
      },
    },
    sections: {
      title: "الأقسام والمجالات",
      subtitle: "فريق قيادة OSIS Armata المكرس لتقدم المنظمة والمدرسة",
      viewDetails: "عرض التفاصيل",
      memberDetails: "تفاصيل العضو",
      responsibilities: "المهام والمسؤوليات",
      contact: "اتصال",
    },
    activities: {
      title: "الأنشطة والبرامج",
      subtitle: "البرامج والأنشطة المختلفة التي تم وسيتم تنفيذها بواسطة OSIS Armata",
      viewDetails: "عرض التفاصيل",
      activityDetails: "تفاصيل النشاط",
      time: "الوقت:",
      location: "الموقع:",
      participants: "المشاركون:",
      schoolEnvironment: "البيئة المدرسية",
      allStudents: "جميع الطلاب",
      joinQuestion: "تريد المشاركة في أنشطة OSIS Armata؟",
      contactUs: "اتصل بنا",
    },
    gallery: {
      title: "المعرض",
      subtitle: "توثيق الأنشطة واللحظات الثمينة لـ OSIS Armata",
    },
    alumni: {
      title: "كلمات الخريجين",
      subtitle: "شهادات من خريجي OSIS Armata",
      alumniOsis: "خريج OSIS",
      class: "دفعة",
      shareQuestion: "تريد مشاركة تجربتك كخريج من OSIS Armata؟",
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "لا تتردد في الاتصال بنا إذا كان لديك أي أسئلة أو اقتراحات",
      sendMessage: "إرسال رسالة",
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      send: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      successMessage: "تم إرسال الرسالة بنجاح! شكرًا لك.",
      address: "العنوان",
      phone: "الهاتف",
      operatingHours: "ساعات العمل",
      mondayFriday: "الاثنين - الجمعة\n07:00 - 15:00 WIB",
      followUs: "تابعنا",
      schoolLocation: "خريطة موقع المدرسة",
    },
    footer: {
      description: "منظمة طلابية داخل المدرسة ملتزمة بتطوير إمكانات الطلاب وبناء شخصية قادة المستقبل.",
      quickLinks: "روابط سريعة",
      aboutUs: "حولنا",
      sectionsAndFields: "الأقسام والمجالات",
      featuredPrograms: "البرامج المميزة",
      sportsAndArts: "أسبوع الرياضة والفنون",
      culturalFestival: "المهرجان الثقافي",
      socialService: "الخدمة الاجتماعية",
      motivationSeminar: "ندوة التحفيز",
      artPerformance: "العرض الفني",
      copyright: "© 2024 OSIS Armata. جميع الحقوق محفوظة.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      gallery: "Gallery",
      sections: "Sections",
      activities: "Activities",
      alumni: "Alumni",
      contact: "Contact",
    },
    hero: {
      title: "OSIS ARMATA",
      subtitle: "Building Character, Developing Potential, Achieving Excellence",
      joinButton: "Join OSIS",
      activitiesButton: "View Activities",
    },
    about: {
      title: "About OSIS Armata",
      subtitle: "An organization committed to building character and developing student potential",
      description1:
        "OSIS Armata is an intra-school student organization dedicated to developing leadership potential, creativity, and student character through various innovative programs and activities.",
      description2:
        "With the spirit of cooperation and the noble values of Pancasila, we are committed to creating a conducive, harmonious, and achievement-filled school environment. Every program we run is designed to shape a young generation with character, achievement, and ready to face future challenges.",
      description3:
        "Join us in realizing the vision of an excellent school and be part of positive change for the advancement of Indonesian education.",
      stats: {
        activeMembers: "Active Members",
        graduates: "Number of Graduates",
        annualPrograms: "Annual Programs",
        socialActivities: "Social Activities",
      },
    },
    sections: {
      title: "Sections & Fields",
      subtitle: "OSIS Armata leadership team dedicated to organizational and school advancement",
      viewDetails: "View Details",
      memberDetails: "Member Details",
      responsibilities: "Tasks & Responsibilities",
      contact: "Contact",
    },
    activities: {
      title: "Activities & Programs",
      subtitle: "Various programs and activities that have been and will be implemented by OSIS Armata",
      viewDetails: "View Details",
      activityDetails: "Activity Details",
      time: "Time:",
      location: "Location:",
      participants: "Participants:",
      schoolEnvironment: "School Environment",
      allStudents: "All Students",
      joinQuestion: "Want to participate in OSIS Armata activities?",
      contactUs: "Contact Us",
    },
    gallery: {
      title: "Gallery",
      subtitle: "Documentation of activities and precious moments of OSIS Armata",
    },
    alumni: {
      title: "Alumni Words",
      subtitle: "Testimonials from OSIS Armata alumni",
      alumniOsis: "OSIS Alumni",
      class: "Class of",
      shareQuestion: "Want to share your experience as an OSIS Armata alumni?",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Don't hesitate to contact us if you have any questions or suggestions",
      sendMessage: "Send Message",
      fullName: "Full Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      successMessage: "Message sent successfully! Thank you.",
      address: "Address",
      phone: "Phone",
      operatingHours: "Operating Hours",
      mondayFriday: "Monday - Friday\n07:00 - 15:00 WIB",
      followUs: "Follow Us",
      schoolLocation: "School Location Map",
    },
    footer: {
      description:
        "An intra-school student organization committed to developing student potential and building the character of future leaders.",
      quickLinks: "Quick Links",
      aboutUs: "About Us",
      sectionsAndFields: "Sections & Fields",
      featuredPrograms: "Featured Programs",
      sportsAndArts: "Sports & Arts Week",
      culturalFestival: "Cultural Festival",
      socialService: "Social Service",
      motivationSeminar: "Motivation Seminar",
      artPerformance: "Art Performance",
      copyright: "© 2024 OSIS Armata. All rights reserved.",
    },
  },
}

export function getTranslation(language: Language): Translations {
  return translations[language] || translations.id
}

export function isRTL(language: Language): boolean {
  return language === "ar"
}
