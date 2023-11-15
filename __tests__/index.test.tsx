import { render, screen } from '@testing-library/react'
import HomePage from '@/pages/index'
import '@testing-library/jest-dom'

// Mock API request
jest.mock('../pages/api/tmdb');

const topRateData = {
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

const nowPlayinData = {
  results: [
    {
      id: 1,
      backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      original_title: "The Godfather",
      overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge."
    },
    {
      id: 2,
      backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      original_title: "The Godfather",
      overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge."
    }
  ]
}

describe('HomePage', () => {
  it('renders a Home page', () => {
    render(<HomePage topRatedMovieData={topRateData} nowPlayingData={nowPlayinData} />)
 
    const listHeading = screen.getByRole('heading', {
      name: /Now Playing Movies/i
    })
 
    expect(listHeading).toBeInTheDocument()
  })
})
