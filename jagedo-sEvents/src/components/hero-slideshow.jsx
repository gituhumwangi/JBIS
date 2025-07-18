import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const HeroSlideshow = ({ slides, autoPlay = true, autoPlayInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isPlaying, slides.length, autoPlayInterval])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-8 lg:p-16 gap-3 sm:gap-4 md:gap-6"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0.9, 0.9, 0.9), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
              }}
            >
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-manrope leading-tight px-2">
                {slide.title}
              </h1>
              <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-manrope pt-1 sm:pt-2 px-2">
                {slide.subtitle}
              </h2>
              <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl px-2">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 touch-manipulation"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 touch-manipulation"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
              index === currentSlide ? "bg-yellow-400 scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 z-10 touch-manipulation"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? <Pause size={16} className="sm:w-5 sm:h-5" /> : <Play size={16} className="sm:w-5 sm:h-5" />}
      </button>

      {/* Slide Counter */}
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/30 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium z-10">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
}

export default HeroSlideshow
