import { useEffect } from "react"

// Alternative lightweight SEO component for specific pages
const PageSEO = ({ pageTitle, pageDescription, pageKeywords, pageType = "website", pageImage }) => {
  useEffect(() => {
    if (pageTitle) {
      document.title = `${pageTitle} | JBIS 2025 - JaGedo Builders Innovation Summit`
    }

    const updateMetaTag = (selector, content) => {
      const meta = document.querySelector(selector)
      if (meta && content) {
        meta.setAttribute("content", content)
      }
    }

    if (pageDescription) {
      updateMetaTag('meta[name="description"]', pageDescription)
      updateMetaTag('meta[property="og:description"]', pageDescription)
      updateMetaTag('meta[property="twitter:description"]', pageDescription)
    }

    if (pageKeywords) {
      updateMetaTag('meta[name="keywords"]', pageKeywords)
    }

    if (pageImage) {
      updateMetaTag('meta[property="og:image"]', pageImage)
      updateMetaTag('meta[property="twitter:image"]', pageImage)
    }

    if (pageType) {
      updateMetaTag('meta[property="og:type"]', pageType)
    }
  }, [pageTitle, pageDescription, pageKeywords, pageType, pageImage])

  return null
}

export default PageSEO
