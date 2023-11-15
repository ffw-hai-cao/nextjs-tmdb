import { render, screen } from '@testing-library/react'
import MoviesCollection from '@/components/MoviesCollection'
import '@testing-library/jest-dom'

// Mock API request
jest.mock('../pages/api/tmdb');

const results = {
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

describe('MoviesCollection', () => {
  it('renders a Movies list', () => {
    render(<MoviesCollection title='Now Playing Movies' results={results} endpoint='/movie/now_playing' template='default'/>)
 
    const listHeading = screen.getByRole('heading', {
      name: /Now Playing Movies/i
    })
 
    expect(listHeading).toBeInTheDocument()
  })
})
