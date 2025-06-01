import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Car,
  Users,
  Wrench,
  Building,
  Bed,
  Star,
  Shield,
  Clock,
  Search,
  Download,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Menu,
  Heart,
  MessageCircle,
  MapPin,
  Play,
} from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background Elements - Butterfly Wings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left wing */}
        <div className="absolute top-0 left-0 w-[40vw] h-[40vh] bg-gradient-to-br from-white/5 via-purple-500/5 to-transparent rounded-br-[100%] blur-3xl transform -translate-x-1/4 -translate-y-1/4 animate-pulse"></div>
        {/* Right wing */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-gradient-to-bl from-white/5 via-blue-500/5 to-transparent rounded-bl-[100%] blur-3xl transform translate-x-1/4 -translate-y-1/4 animate-pulse delay-300"></div>
        {/* Bottom left wing */}
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vh] bg-gradient-to-tr from-white/8 via-pink-500/5 to-transparent rounded-tr-[100%] blur-3xl transform -translate-x-1/4 translate-y-1/4 animate-pulse delay-700"></div>
        {/* Bottom right wing */}
        <div className="absolute bottom-0 right-0 w-[30vw] h-[30vh] bg-gradient-to-tl from-white/8 via-cyan-500/5 to-transparent rounded-tl-[100%] blur-3xl transform translate-x-1/4 translate-y-1/4 animate-pulse delay-500"></div>

        {/* Butterfly body */}
        <div className="absolute top-1/2 left-1/2 w-4 h-[80vh] bg-gradient-to-b from-white/10 via-gray-500/10 to-black/10 blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full blur-sm animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/30 rounded-full blur-sm animate-float delay-300"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white/20 rounded-full blur-sm animate-float delay-700"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-white/20 rounded-full blur-sm animate-float delay-500"></div>
        <div className="absolute top-1/2 left-[10%] w-3 h-3 bg-white/30 rounded-full blur-sm animate-float delay-1000"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-700/50 bg-black/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-white via-gray-300 to-gray-600 shadow-lg"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              RENT PINAS
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#categories" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Categories
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Testimonials
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden md:inline-flex text-gray-300 hover:text-white hover:bg-gray-800/50"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-gray-300 shadow-lg">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 relative">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden min-h-[90vh] flex items-center">
          {/* Hero Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-gray-900/40 to-black/50"></div>

          {/* Central Spotlight effect for phone */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-pink-600/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

          {/* Additional sharp ambient lighting */}
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-600/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-tl from-blue-600/25 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-gradient-to-bl from-pink-600/25 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>

          <div className="container relative px-4 md:px-6 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center min-h-[80vh]">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-right">
                <div className="space-y-4">
                  <Badge
                    variant="secondary"
                    className="bg-gray-800/90 text-gray-100 border-gray-600/60 backdrop-blur-sm w-fit mx-auto lg:ml-auto lg:mr-0 px-4 py-2"
                  >
                    🦋 Rent Anything
                  </Badge>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                    <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
                      Discover
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                      Everything
                    </span>
                  </h2>

                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    From companionship to cars, from services to spaces. Your perfect rental is just a tap away.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">4.8 Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <span className="font-semibold">50K+ Users</span>
                  </div>
                </div>
              </div>

              {/* Center Content - Phone Mockup */}
              <div className="relative flex justify-center items-center order-first lg:order-none">
                {/* Enhanced Glow Effects Around Phone */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-pink-600/30 rounded-[80px] blur-3xl scale-125 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent rounded-[80px] blur-2xl scale-115"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-[80px] blur-xl scale-110"></div>

                {/* Main Phone Mockup */}
                <div className="relative w-[300px] md:w-[340px] lg:w-[380px] aspect-[9/19] transform hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-black rounded-[45px] p-2 shadow-2xl border-2 border-gray-600/60 backdrop-blur-sm">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 w-1/3 h-7 bg-black rounded-b-2xl transform -translate-x-1/2 z-10"></div>

                    {/* Screen */}
                    <div className="h-full w-full bg-gradient-to-br from-gray-800 to-black rounded-[38px] overflow-hidden relative border border-gray-700/50">
                      {/* App Screen Content */}
                      <div className="h-full w-full flex flex-col">
                        {/* Status Bar */}
                        <div className="h-14 bg-black/90 flex items-center justify-between px-5 relative z-10">
                          <div className="text-white text-sm font-semibold">9:41</div>
                          <div className="flex items-center space-x-2">
                            <div className="w-5 h-3 rounded-sm bg-white/90"></div>
                            <div className="w-2 h-4 rounded-sm bg-white/70"></div>
                            <div className="w-7 h-4 rounded-sm border-2 border-white/70 relative">
                              <div className="absolute inset-1 bg-white/90 rounded-sm"></div>
                            </div>
                          </div>
                        </div>

                        {/* App Content */}
                        <div className="flex-1 bg-gradient-to-br from-gray-800 via-gray-700 to-black p-5 overflow-hidden relative">
                          {/* Sharp Background Pattern */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-600 to-transparent rounded-full blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-600 to-transparent rounded-full blur-2xl"></div>
                          </div>

                          {/* App Header */}
                          <div className="flex justify-between items-center mb-8 relative z-10">
                            <div>
                              <h3 className="text-white text-xl font-bold">Discover</h3>
                              <p className="text-gray-300 text-sm flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                                Manila, Philippines
                              </p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-xl border border-gray-500/50">
                              <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                  src="/placeholder.svg?height=50&width=50"
                                  alt="Profile"
                                  width={50}
                                  height={50}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Search Bar */}
                          <div className="bg-gray-700/70 backdrop-blur-sm rounded-2xl p-4 px-5 flex items-center mb-8 border border-gray-600/60 relative z-10">
                            <Search className="h-5 w-5 text-gray-300 mr-4" />
                            <div className="text-gray-300 text-sm">Search for rentals...</div>
                            <div className="ml-auto">
                              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                              </div>
                            </div>
                          </div>

                          {/* Categories */}
                          <div className="flex space-x-5 mb-8 overflow-x-auto pb-2 relative z-10">
                            <div className="flex flex-col items-center min-w-[70px]">
                              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/30 to-purple-700/40 flex items-center justify-center mb-3 border-2 border-purple-500/30 shadow-lg">
                                <Car className="h-7 w-7 text-white" />
                              </div>
                              <span className="text-white text-xs font-semibold">Cars</span>
                            </div>
                            <div className="flex flex-col items-center min-w-[70px]">
                              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-700/40 flex items-center justify-center mb-3 border-2 border-blue-500/30 shadow-lg">
                                <Home className="h-7 w-7 text-white" />
                              </div>
                              <span className="text-white text-xs font-semibold">Homes</span>
                            </div>
                            <div className="flex flex-col items-center min-w-[70px]">
                              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-600/30 to-pink-700/40 flex items-center justify-center mb-3 border-2 border-pink-500/30 shadow-lg">
                                <Users className="h-7 w-7 text-white" />
                              </div>
                              <span className="text-white text-xs font-semibold">People</span>
                            </div>
                            <div className="flex flex-col items-center min-w-[70px]">
                              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600/30 to-cyan-700/40 flex items-center justify-center mb-3 border-2 border-cyan-500/30 shadow-lg">
                                <Wrench className="h-7 w-7 text-white" />
                              </div>
                              <span className="text-white text-xs font-semibold">Services</span>
                            </div>
                          </div>

                          {/* Featured Listing */}
                          <div className="rounded-2xl overflow-hidden mb-5 relative shadow-2xl border-2 border-gray-600/40 z-10">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
                            <Image
                              src="/condo.png?height=200&width=360"
                              alt="Luxury Condo"
                              width={360}
                              height={200}
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 p-5 z-20">
                              <div className="flex items-center justify-between w-full">
                                <div>
                                  <h4 className="text-white text-base font-bold mb-2">Luxury Condo in Makati</h4>
                                  <p className="text-gray-200 text-sm">₱2,500 / night</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <div className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-white text-sm font-semibold">4.9</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full p-3 z-20">
                              <Heart className="h-5 w-5 text-white" />
                            </div>
                          </div>

                          {/* Quick Listings Grid */}
                          <div className="grid grid-cols-2 gap-4 relative z-10">
                            <div className="rounded-xl overflow-hidden bg-gray-700/50 backdrop-blur-sm border border-gray-600/40">
                              <div className="h-24 relative">
                                <Image
                                  src="/house.png?height=120&width=180"
                                  alt="Toyota Vios"
                                  width={180}
                                  height={120}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                                  Available
                                </div>
                              </div>
                              <div className="p-3">
                                <h5 className="text-white text-sm font-semibold mb-1">Toyota Vios</h5>
                                <p className="text-gray-300 text-xs">₱1,800 / day</p>
                              </div>
                            </div>

                            <div className="rounded-xl overflow-hidden bg-gray-700/50 backdrop-blur-sm border border-gray-600/40">
                              <div className="h-24 relative">
                                <Image
                                  src="/car.png?height=120&width=180"
                                  alt="Tour Guide"
                                  width={180}
                                  height={120}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                                  Popular
                                </div>
                              </div>
                              <div className="p-3">
                                <h5 className="text-white text-sm font-semibold mb-1">Tour Guide</h5>
                                <p className="text-gray-300 text-xs">₱2,500 / day</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="h-18 bg-gray-800/95 backdrop-blur-md flex items-center justify-around px-8 border-t-2 border-gray-700/60 relative z-10">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-2 shadow-lg">
                              <Home className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-white text-xs font-semibold">Home</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <Search className="h-6 w-6 text-gray-400 mb-2" />
                            <span className="text-gray-400 text-xs">Search</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <Heart className="h-6 w-6 text-gray-400 mb-2" />
                            <span className="text-gray-400 text-xs">Saved</span>
                          </div>
                          <div className="flex flex-col items-center relative">
                            <MessageCircle className="h-6 w-6 text-gray-400 mb-2" />
                            <span className="text-gray-400 text-xs">Chat</span>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white text-xs font-bold">{"2"}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Phone Reflections and Highlights */}
                  <div className="absolute top-[10%] left-[10%] w-[30%] h-[20%] bg-gradient-to-br from-white/40 to-transparent rounded-full blur-lg transform rotate-45"></div>
                  <div className="absolute bottom-[40%] right-[15%] w-[20%] h-[12%] bg-gradient-to-br from-white/30 to-transparent rounded-full blur-lg"></div>
                </div>

                {/* Enhanced Floating Elements Around Phone */}
                <div className="absolute -top-12 -right-12 w-20 h-20 bg-gradient-to-br from-purple-600/40 to-transparent rounded-full blur-xl animate-float"></div>
                <div className="absolute -bottom-16 -left-8 w-24 h-24 bg-gradient-to-br from-blue-600/35 to-transparent rounded-full blur-xl animate-float delay-300"></div>
                <div className="absolute top-1/2 -right-16 w-16 h-16 bg-gradient-to-br from-pink-600/45 to-transparent rounded-full blur-xl animate-float delay-700"></div>
                <div className="absolute top-1/4 -left-12 w-18 h-18 bg-gradient-to-br from-cyan-600/40 to-transparent rounded-full blur-xl animate-float delay-500"></div>

                {/* Enhanced Orbiting Elements */}
                <div className="absolute top-0 left-1/2 w-6 h-6 bg-white/50 rounded-full blur-sm animate-orbit"></div>
                <div className="absolute bottom-0 right-1/4 w-4 h-4 bg-white/40 rounded-full blur-sm animate-orbit-reverse delay-1000"></div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <Badge
                    variant="secondary"
                    className="bg-gray-800/90 text-gray-100 border-gray-600/60 backdrop-blur-sm w-fit mx-auto lg:mr-auto lg:ml-0 px-4 py-2"
                  >
                    Anytime, Anywhere
                  </Badge>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                    <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
                      Rent Pinas
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                      Experience
                    </span>
                  </h2>

                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    Experience anything you need in the Philippines with just a few taps. Safe, secure, and verified.
                  </p>
                </div>

                <div className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-50 hover:to-gray-200 shadow-2xl text-base font-bold h-14 border-2 border-white/20"
                  >
                    <Download className="mr-3 h-6 w-6" />
                    Download App
                  </Button>
                  {/* <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-400 text-gray-100 hover:bg-gray-700/60 hover:text-white backdrop-blur-sm text-base font-bold h-14"
                  >
                    <Play className="mr-3 h-6 w-6" />
                    Watch Demo
                  </Button> */}
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="font-semibold">Verified Rentals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="font-semibold">Secure Payments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section with Images */}
        <section id="categories" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-black/90 to-gray-800/95"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/8 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Rent Everything You Need
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our diverse categories and find exactly what you're looking for
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-500 bg-gray-800/50 border-gray-600/50 hover:border-gray-400/50 backdrop-blur-sm hover:bg-gray-700/60 overflow-hidden">
                <div className="h-48 w-full overflow-hidden relative">
                  <Image
                    src="/woman.png?height=300&width=500"
                    alt="Companionship services"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-white">Companionship</CardTitle>
                  <CardDescription className="text-gray-300">
                    Professional companions for events, tours, and social gatherings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Event companions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Tour guides</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Social activities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 bg-gray-800/50 border-gray-600/50 hover:border-gray-400/50 backdrop-blur-sm hover:bg-gray-700/60 overflow-hidden">
                <div className="h-48 w-full overflow-hidden relative">
                  <Image
                    src="/car.png?height=300&width=500"
                    alt="Luxury vehicles"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-white">Vehicles</CardTitle>
                  <CardDescription className="text-gray-300">
                    Cars, motorcycles, bikes, and more for your transportation needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Cars & SUVs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Motorcycles</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Bicycles</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 bg-gray-800/50 border-gray-600/50 hover:border-gray-400/50 backdrop-blur-sm hover:bg-gray-700/60 overflow-hidden">
                <div className="h-48 w-full overflow-hidden relative">
                  <Image
                    src="/condo.png?height=300&width=500"
                    alt="Luxury properties"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-white">Properties</CardTitle>
                  <CardDescription className="text-gray-300">
                    Houses, apartments, condos, and vacation rentals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Houses & Condos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Vacation rentals</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Event venues</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 bg-gray-800/50 border-gray-600/50 hover:border-gray-400/50 backdrop-blur-sm hover:bg-gray-700/60 overflow-hidden">
                <div className="h-48 w-full overflow-hidden relative">
                  <Image
                    src="/room.png?height=300&width=500"
                    alt="Comfortable rooms"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                    <Bed className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-white">Rooms</CardTitle>
                  <CardDescription className="text-gray-300">
                    Private rooms, shared spaces, and temporary accommodations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Private rooms</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Shared spaces</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Short-term stays</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 bg-gray-800/50 border-gray-600/50 hover:border-gray-400/50 backdrop-blur-sm hover:bg-gray-700/60 overflow-hidden">
                <div className="h-48 w-full overflow-hidden relative">
                  <Image
                    src="/service.png?height=300&width=500"
                    alt="Professional services"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-white">Services</CardTitle>
                  <CardDescription className="text-gray-300">
                    Professional services from skilled individuals and businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Home services</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Professional skills</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Personal assistance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 bg-gray-800/50 border-gray-600/50 hover:border-gray-400/50 backdrop-blur-sm hover:bg-gray-700/60 overflow-hidden">
                <div className="h-48 w-full overflow-hidden relative">
                  <Image
                    src="/equip.png?height=300&width=500"
                    alt="Equipment rental"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-white">Equipment</CardTitle>
                  <CardDescription className="text-gray-300">
                    Tools, gadgets, and equipment for work and personal use
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Power tools</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Electronics</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Sports equipment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-0 w-72 h-72 bg-gradient-to-r from-cyan-500/8 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-l from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">How Rent Pinas Works</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Simple, secure, and seamless rental experience in three easy steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="text-center group relative">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-xl animate-pulse"></div>
                <div className="mx-auto mb-6 p-6 bg-gradient-to-br from-white via-gray-200 to-gray-400 rounded-full w-20 h-20 flex items-center justify-center text-black font-bold text-2xl shadow-2xl group-hover:scale-110 transition-transform">
                  1
                </div>
                <div className="relative bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-500/50 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-4">Browse & Search</h3>
                  <div className="mb-4 h-40 overflow-hidden rounded-lg">
                    <Image
                      src="/search.png?height=200&width=300"
                      alt="Browse and search"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Explore thousands of rental options across the Philippines. Use our smart filters to find exactly
                    what you need.
                  </p>
                </div>
              </div>

              <div className="text-center group relative">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-xl animate-pulse delay-300"></div>
                <div className="mx-auto mb-6 p-6 bg-gradient-to-br from-gray-300 via-gray-500 to-gray-700 rounded-full w-20 h-20 flex items-center justify-center text-white font-bold text-2xl shadow-2xl group-hover:scale-110 transition-transform">
                  2
                </div>
                <div className="relative bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-500/50 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-4">Book & Pay</h3>
                  <div className="mb-4 h-40 overflow-hidden rounded-lg">
                    <Image
                      src="/pay.png?height=200&width=300"
                      alt="Book and pay"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Select your dates, review details, and make secure payments through our protected platform with
                    multiple payment options.
                  </p>
                </div>
              </div>

              <div className="text-center group relative">
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-xl animate-pulse delay-700"></div>
                <div className="mx-auto mb-6 p-6 bg-gradient-to-br from-gray-600 via-gray-800 to-black rounded-full w-20 h-20 flex items-center justify-center text-white font-bold text-2xl shadow-2xl group-hover:scale-110 transition-transform">
                  3
                </div>
                <div className="relative bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-500/50 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-4">Enjoy & Review</h3>
                  <div className="mb-4 h-40 overflow-hidden rounded-lg">
                    <Image
                      src="/rate.png?height=200&width=300"
                      alt="Enjoy and review"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Meet your rental provider, enjoy your experience, and leave a review to help our community grow
                    stronger.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-black to-gray-800"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-500/6 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-bl from-blue-500/8 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">What Our Users Say</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied users across the Philippines
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-500/50 transition-colors relative group">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Maria Santos"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Maria Santos</h4>
                    <p className="text-gray-400 text-sm">Manila</p>
                  </div>
                </div>
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm italic">
                  "I rented a condo for my vacation in Boracay and it was perfect! The app made it so easy to find
                  exactly what I needed. Will definitely use Rent Pinas again!"
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-500/50 transition-colors relative group">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Juan Dela Cruz"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Juan Dela Cruz</h4>
                    <p className="text-gray-400 text-sm">Cebu</p>
                  </div>
                </div>
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-500"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-300 text-sm italic">
                  "Rented a car for a business trip and the process was seamless. The vehicle was in great condition and
                  the owner was very professional. Highly recommend!"
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-500/50 transition-colors relative group">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Sophia Reyes"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Sophia Reyes</h4>
                    <p className="text-gray-400 text-sm">Davao</p>
                  </div>
                </div>
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm italic">
                  "Found an amazing tour guide through Rent Pinas who showed me the hidden gems of Palawan. The app's
                  verification system made me feel safe and secure throughout the experience."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-black to-gray-800"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-80 h-80 bg-gradient-to-br from-white/6 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-bl from-gray-400/8 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Why Choose Rent Pinas?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built for Filipinos, by Filipinos. Experience the future of rentals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full w-16 h-16 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-gray-200" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Verified & Secure</h3>
                <p className="text-gray-300 text-sm">
                  All users and listings are verified for your safety and peace of mind.
                </p>
              </div>

              <div className="text-center group relative">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full w-16 h-16 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-gray-200" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300 text-sm">
                  Round-the-clock customer support to assist you whenever you need help.
                </p>
              </div>

              <div className="text-center group relative">
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full w-16 h-16 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Smartphone className="h-8 w-8 text-gray-200" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Mobile First</h3>
                <p className="text-gray-300 text-sm">
                  Optimized mobile experience for booking and managing rentals on the go.
                </p>
              </div>

              <div className="text-center group relative">
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full w-16 h-16 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Star className="h-8 w-8 text-gray-200" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quality Assured</h3>
                <p className="text-gray-300 text-sm">
                  Rating system and quality checks ensure you get the best rental experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-gray-400/10"></div>
            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-tr from-blue-500/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">Ready to Start Renting?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of Filipinos who trust Rent Pinas for all their rental needs. Download the app today and
                discover endless possibilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-gray-300 flex-1 w-full sm:w-auto shadow-2xl"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-gray-300 flex-1 w-full sm:w-auto shadow-2xl"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8/5 App Store Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>50,000+ Active Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>100% Secure Payments</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-white py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-white via-gray-300 to-gray-600 shadow-lg"></div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  RENT PINAS
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                The Philippines' premier rental marketplace for everything you need.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Companionship
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Vehicles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Safety
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Stay Updated</h3>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 backdrop-blur-sm"
                  />
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-gray-300"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-400">Get updates on new features and rental opportunities.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Rent Pinas. All rights reserved. Made with 🦋 in the Philippines.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
