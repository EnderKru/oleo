import {createBrowserRouter} from 'react-router-dom'
import {
  SignupPage,
  MainPage,
  LoginPage,
  NoPage,
  ProfilePage,
  CookPage,
  CategoriesPage,
  Leaves,
  ResetPasswordPage
} from "../pages"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/login',
    element: 
    <div className='login-page'>
        <Leaves />
        <LoginPage />
    </div>
  },
  {
    path: '/categories',
    element: <CategoriesPage />
  },
  {
    path: '/cook',
    element: <CookPage />
  },
  {
    path: '/*',
    element: <NoPage />
  },
  {
    path: '/registration',
    element: 
    <div className='signup-page'>
        <Leaves />
        <SignupPage />
    </div>
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/reset-password',
    element: <ResetPasswordPage />
  }
])
