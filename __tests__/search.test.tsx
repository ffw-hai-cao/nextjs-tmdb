import { render, screen, fireEvent, act } from '@testing-library/react'
import Search from '@/pages/search'
import '@testing-library/jest-dom'

// Mock API request
jest.mock('../pages/api/tmdb');

describe('Search', () => {
  it('renders a Search page', () => {
    render(<Search />)
 
    const searchInput = screen.getByTestId('search-input')

    expect(searchInput).toBeInTheDocument()
  })

  it('allow user searching', async () => {
    render(<Search />)

    act(() => {

      // Simulate user searching
      fireEvent.change(screen.getByTestId('search-input'), { target: { value: 'fast' } });
  
      // Assert that the user is logged in
      const searchTitle = screen.getByRole('heading', {
        name: /Search for: fast/i
      });
      
      expect(searchTitle).toBeInTheDocument();
    });
  })
})
