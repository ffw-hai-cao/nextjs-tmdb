import { render, screen } from '@testing-library/react'
import Banner from '@/components/Banner'
import '@testing-library/jest-dom'

const results = {
  backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
  original_title: "The Godfather",
  overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
  videos: {
    results: [
      {
        key : "Ma1-sIoZnMs",
        typec : "Trailer"
      }
    ]
  }
}

describe('Banner', () => {
  it('renders a banner Image', () => {
    render(<Banner results={results} />)
 
    const bannerImage = screen.getByTestId('banner-image')
 
    expect(bannerImage).toBeInTheDocument()
  })
  
  it('renders a banner Title', () => {
    render(<Banner results={results} />)
 
    const bannerTitle = screen.getByTestId('banner-title')
 
    expect(bannerTitle).toBeInTheDocument()
  })

  it('renders a banner Overview', () => {
    render(<Banner results={results} />)
 
    const bannerOverview = screen.getByTestId('banner-overview')
 
    expect(bannerOverview).toBeInTheDocument()
  })

  it('renders a banner Button', () => {
    render(<Banner results={results} />)
 
    const bannerCta = screen.getByTestId('banner-cta')
 
    expect(bannerCta).toBeInTheDocument()
  })
})
