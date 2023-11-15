import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Login from '@/pages/login'
import '@testing-library/jest-dom'

// Mock API request
jest.mock('../pages/api/tmdb');

describe('Login', () => {
  it('renders a Login page', () => {
    render(<Login />)
 
    const loginLogo = screen.getByTestId('login-logo')
    const loginUsername = screen.getByTestId('login-username')
    const loginPassword = screen.getByTestId('login-password')
    const loginBtn = screen.getByRole('button', {name: /Login/i})

    expect(loginLogo).toBeInTheDocument()
    expect(loginUsername).toBeInTheDocument()
    expect(loginPassword).toBeInTheDocument()
    expect(loginBtn).toBeInTheDocument()
  })

  it('allow user to log in', async () => {
    render(<Login />)
 
    // Simulate user input
    fireEvent.change(screen.getByTestId('login-username'), { target: { value: 'hai.cao' } });
    fireEvent.change(screen.getByTestId('login-password'), { target: { value: 'Caohai@1234.' } });

    // Simulate form submission
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Assert that the user is logged in
    const loggedInMessage = screen.getByTestId('login-message');
    await waitFor(() => {
      // Check if the user is logged in or if a relevant message is displayed
      expect(loggedInMessage).toBeInTheDocument();
    });
  })
})
