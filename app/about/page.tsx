import Link from 'next/link'
import Image from 'next/image'
import { Heart, Twitter, Instagram, Github, Star, ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function About() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md">
        <header className="px-8 py-5">
          <nav className="flex justify-between items-center max-w-[1400px] mx-auto">
            <Link 
              href="/" 
              className="p-2 rounded-xl bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link href="/" aria-label="Home">
              <Heart className="w-5 h-5 text-white/80" />
            </Link>
          </nav>
        </header>
      </div>

      <main className="pt-28 px-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-8 mb-16">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#0A0A0A]">
            <Image
              src="https://fpk090ataqguaiyr.public.blob.vercel-storage.com/160499103-5NasRAX0vavvPsyF4gSG1F10TDBaIb.png"
              alt="Tahseen's Profile"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-[#F7F06D]" />
              <span className="text-sm">SELF-SUMMARY</span>
            </div>

            <h1 className="text-4xl font-bold">Tahseen</h1>
            
            <p className="text-lg text-white/80">
              Hi, I am Tahseen , a 19-year-old aspiring web and UI/UX designer based in Mumbai, India.

            </p>

            <div className="flex gap-4">
              <Link 
                href="https://x.com/md_tahseen_7" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link 
                href="https://www.instagram.com/md_tahseen_7" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="https://github.com/mdtahseen7" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white/5">
                <div className="text-sm text-[#F7F06D]">2024 - Present</div>
                <div className="font-medium mt-2">Learning Full Stack Web Development</div>
                <div className="text-sm text-white/60 mt-1">Freelance</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5">
                <div className="text-sm text-[#F7F06D]">2022-2024</div>
                <div className="font-medium mt-2">CSC Operator</div>
                <div className="text-sm text-white/60 mt-1">Freelance</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white/5">
                <div className="text-sm text-[#F7F06D]">2024 - 2027</div>
                <div className="font-medium mt-2">Bachelors of Science - Computer Science</div>
                <div className="text-sm text-white/60 mt-1">Rizvi Education Society</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5">
                <div className="text-sm text-[#F7F06D]">2022 - 2024</div>
                <div className="font-medium mt-2">Almost done with school, college is up next!</div>
                <div className="text-sm text-white/60 mt-1">School</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link 
            href="/"
            className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all"
          >
            <h3 className="font-medium mb-2">Browse Wallpapers</h3>
            <p className="text-sm text-white/60">
              Explore our collection of carefully curated minimalist wallpapers.
            </p>
          </Link>
          <Link 
            href="mailto:mdtahseen7378@gmail.com"
            className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all"
          >
            <h3 className="font-medium mb-2">Get in Touch</h3>
            <p className="text-sm text-white/60">
              Got something in mind? Drop a message anytime!
            </p>
          </Link>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}

