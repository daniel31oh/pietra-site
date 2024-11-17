'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useState, useRef } from 'react'

const data = [
  { year: 2018, value: 100 },
  { year: 2019, value: 120 },
  { year: 2020, value: 150 },
  { year: 2021, value: 190 },
  { year: 2022, value: 240 },
  { year: 2023, value: 300 },
]

export default function Component() {
  const [email, setEmail] = useState('')
  const whitepaperRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email)
    setEmail('')
    // Simulate whitepaper download
    alert('Whitepaper download link sent to your email!')
  }

  const scrollToWhitepaper = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    whitepaperRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-r from-green-950 via-black to-black">
        <header className="container mx-auto px-6 py-8">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-3xl tracking-tight text-white">
              PIETRA
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="#whitepaper" className="text-sm hover:text-gray-300 transition-colors" onClick={scrollToWhitepaper}>
                White Paper
              </Link>
              <Button 
                variant="outline" 
                className="text-sm text-black bg-white border-white hover:bg-transparent hover:text-white transition-colors"
              >
                Join Now
              </Button>
            </div>
          </nav>
        </header>

        <section className="container mx-auto px-4 sm:px-6 py-20 sm:py-40 min-h-[calc(100vh-88px)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="col-span-full lg:col-span-3 space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight leading-none tracking-tight lg:text-7xl xl:text-8xl">
                This is<br />
                Digital Asset<br />
                Innovation
              </h1>
              <p className="text-white text-lg max-w-2xl">
                PIETRA is transforming the precious gems market through blockchain technology, 
                enabling fractional ownership of the world's most extraordinary stones.
              </p>
              <div className="space-y-4">
                <p className="text-white text-lg">
                  Be the first in line for our initial gemstone offering.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 w-full"
                  />
                  <Button type="submit" variant="outline" className="bg-white text-black hover:bg-white/90 w-full sm:w-auto">
                    Join Waitlist
                  </Button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-2 relative hidden lg:block">
              <div className="relative w-full aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(6)-Hz19r0tetDetMVD8dvY26q0g5LzqVI.png"
                  alt="Colombian Emerald"
                  width={600}
                  height={600}
                  objectFit="contain"
                  className="relative z-10"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="container mx-auto px-6 py-40 border-t border-white/10">
        <div className="max-w-4xl">
          <h2 className="text-5xl font-extralight leading-tight tracking-tight lg:text-6xl mb-8">
            PIETRA envisions a future where<br />
            precious gems become accessible<br />
            through blockchain innovation.
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl">
            PIETRA revolutionizes gem investment with blockchain technology, offering secure verification and enhanced liquidity. Our platform enables fractional ownership of high-value gems, creating a dynamic market where investors can easily trade and diversify their portfolios with appreciating tangible assets.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-40 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-extralight leading-tight tracking-tight lg:text-5xl">
              Exceptional returns through<br />
              rare gem investments
            </h2>
            <p className="text-gray-400 text-xl">
              Historical data shows consistent value appreciation of rare gemstones, 
              outperforming traditional investment vehicles. Our platform's enhanced liquidity 
              allows investors to capitalize on market trends more efficiently than ever before.
            </p>
          </div>
          <Card className="bg-black/50 border-white/10">
            <div className="p-4 h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="year" 
                    stroke="rgba(255,255,255,0.5)"
                    tick={{ fill: 'rgba(255,255,255,0.5)' }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.5)"
                    tick={{ fill: 'rgba(255,255,255,0.5)' }}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none' }}
                    labelStyle={{ color: 'white' }}
                    itemStyle={{ color: '#10b981' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    dot={{ fill: '#10b981', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </section>

      <section ref={whitepaperRef} id="whitepaper" className="container mx-auto px-6 py-40 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-extralight leading-tight tracking-tight lg:text-6xl mb-8">
            Discover the Future of Gem Investment
          </h2>
          <p className="text-gray-400 text-xl mb-8">
            Our comprehensive whitepaper details PIETRA's revolutionary approach to gem investment. Learn about our blockchain-based platform, the benefits of fractional ownership, and how we're reshaping the precious stones market.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 max-w-md mx-auto"
            />
            <Button type="submit" variant="outline" className="w-full max-w-md mx-auto bg-white text-black hover:bg-white/90">
              Download Whitepaper
            </Button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-16 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PIETRA</h3>
              <p className="text-sm text-gray-400">Revolutionizing gem investment through blockchain technology.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#whitepaper" className="text-sm text-gray-400 hover:text-white transition-colors" onClick={scrollToWhitepaper}>White Paper</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Twitter</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Instagram</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-400">
            © 2023 PIETRA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
Add landing page
