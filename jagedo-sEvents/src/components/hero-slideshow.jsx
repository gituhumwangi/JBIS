const HeroSlideshow = ({ slides }) => {
  // Just use the first slide since we only want one image
  const slide = slides[0]

  if (!slide) {
    return <div className="w-full h-full bg-gray-200 flex items-center justify-center">No content available</div>
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Single Hero Image */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 w-full h-full">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-8 lg:p-16 gap-3 sm:gap-4 md:gap-6"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
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
      </div>
    </div>
  )
}

export default HeroSlideshow
