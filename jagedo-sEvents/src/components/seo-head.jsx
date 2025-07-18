import { useEffect } from "react"

const SEOHead = ({
  title = "JBIS 2025 - JaGedo Builders Innovation Summit | Construction Innovation Kenya",
  description = "Join Kenya's premier construction innovation summit. Connect with 500+ builders, tech innovators, and industry leaders at JBIS 2025 in Nairobi. Discover PropTech solutions, BIM technology, and sustainable construction practices.",
  keywords = "Construction Innovation Kenya, Builders Summit Nairobi, PropTech Africa Summit, JBIS 2025, JaGedo Summit, Construction Technology Kenya, Building Innovation Africa, Smart Construction Nairobi, Construction Conference Kenya, PropTech East Africa",
  url = "https://jbis.jagedo.co.ke",
  image = "/images/jbis-social-share.jpg",
}) => {
  useEffect(() => {
    // Set document title
    document.title = title

    // Function to set or update meta tag
    const setMetaTag = (name, content, property = false) => {
      const attribute = property ? "property" : "name"
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)

      if (!meta) {
        meta = document.createElement("meta")
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      meta.setAttribute("content", content)
    }

    // Function to set or update link tag
    const setLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`)

      if (!link) {
        link = document.createElement("link")
        link.setAttribute("rel", rel)
        document.head.appendChild(link)
      }
      link.setAttribute("href", href)
    }

    // Primary Meta Tags
    setMetaTag("description", description)
    setMetaTag("keywords", keywords)
    setMetaTag("robots", "index, follow")
    setMetaTag("language", "English")
    setMetaTag("author", "JaGedo Innovations Limited")

    // Canonical URL
    setLinkTag("canonical", url)

    // Open Graph / Facebook
    setMetaTag("og:type", "website", true)
    setMetaTag("og:url", url, true)
    setMetaTag("og:title", title, true)
    setMetaTag("og:description", description, true)
    setMetaTag("og:image", image, true)
    setMetaTag("og:site_name", "JBIS 2025 - JaGedo Builders Innovation Summit", true)
    setMetaTag("og:locale", "en_KE", true)

    // Twitter
    setMetaTag("twitter:card", "summary_large_image", true)
    setMetaTag("twitter:url", url, true)
    setMetaTag("twitter:title", title, true)
    setMetaTag("twitter:description", description, true)
    setMetaTag("twitter:image", image, true)
    setMetaTag("twitter:creator", "@JaGedoKenya", true)

    // LinkedIn
    setMetaTag("linkedin:card", "summary_large_image", true)
    setMetaTag("linkedin:url", url, true)
    setMetaTag("linkedin:title", title, true)
    setMetaTag("linkedin:description", description, true)
    setMetaTag("linkedin:image", image, true)

    // Additional Meta Tags
    setMetaTag("geo.region", "KE-30")
    setMetaTag("geo.placename", "Nairobi")
    setMetaTag("geo.position", "-1.286389;36.817223")
    setMetaTag("ICBM", "-1.286389, 36.817223")

    // Event Schema JSON-LD
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      name: "JaGedo Builders Innovation Summit (JBIS) 2025",
      description:
        "Kenya's premier construction innovation summit bringing together builders, tech innovators, and industry leaders",
      startDate: "2025-10-17T08:00:00+03:00",
      endDate: "2025-10-18T18:00:00+03:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Nairobi Convention Center",
        address: {
          "@type": "PostalAddress",
          streetAddress: "TBD",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "JaGedo Innovations Limited",
        url: "https://jagedo.co.ke",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KES",
        availability: "https://schema.org/InStock",
        url: "https://jbis.jagedo.co.ke/registration",
      },
    })
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      // Optional: Clean up meta tags when component unmounts
      // This is usually not necessary for SEO tags
    }
  }, [title, description, keywords, url, image])

  return null // This component doesn't render anything visible
}

export default SEOHead
