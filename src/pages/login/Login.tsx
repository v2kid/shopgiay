import React, { useMemo, useState } from 'react'
import { useGsigninQuery, useSignInMutation } from './login.service'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from './login.slice'
const initialState = {
  email: '',
  password: ''
}

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signIn, signInresult] = useSignInMutation()

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      const token = await signIn({ email, password }).unwrap()
      dispatch(setToken(token))
      navigate('/admin')
    } catch (error) {
      console.error('rejected', error)
    }
  }

  const handleGoogleSuccess = () => {}

  const handleGoogleFailure = () => {
    // Handle Google login failure.
  }
  return (
    <div className='bg-white dark:bg-gray-900'>
      <div className='flex h-screen justify-center'>
        <div
          className='hidden bg-cover lg:block lg:w-2/3'
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'
          }}
        >
          <div className='flex h-full items-center bg-gray-900 bg-opacity-40 px-20'>
            <div>
              <h2 className='text-4xl font-bold text-white'>Brand</h2>
              <p className='mt-3 max-w-xl text-gray-300'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores,
                repellendus perferendis libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>
        <div className='mx-auto flex w-full max-w-md items-center px-6 lg:w-2/6'>
          <div className='flex-1'>
            <div className='text-center'>
              <h2 className='text-center text-4xl font-bold text-gray-700 dark:text-white'>Brand</h2>
              <p className='mt-3 text-gray-500 dark:text-gray-300'>Sign in to access your account</p>
            </div>
            <div className='mt-8'>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor='email' className='mb-2 block text-sm text-gray-600 dark:text-gray-200'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='example@example.com'
                    onChange={(e) => setEmail(e.target.value)}
                    className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400'
                  />
                </div>
                <div className='mt-6'>
                  <div className='mb-2 flex justify-between'>
                    <label htmlFor='password' className='text-sm text-gray-600 dark:text-gray-200'>
                      Password
                    </label>
                    <a
                      href='#'
                      className='text-sm text-gray-400 hover:text-blue-500 hover:underline focus:text-blue-500'
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Your Password'
                    className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400'
                  />
                </div>
                <div className='mt-6'>
                  <button
                    type='submit'
                    className='w-full transform rounded-md bg-blue-500 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                  >
                    Sign in
                  </button>
                </div>
                <p className='mt-3 text-gray-500 dark:text-gray-300'>
                  <div className='max-w-sm px-6 sm:px-0'>
                  </div>
                </p>
              </form>
              <p className='mt-6 text-center text-sm text-gray-400'>
                Don't have an account yet?{' '}
                <Link to='/register' className='text-blue-500 hover:underline focus:underline focus:outline-none'>
                  {' '}
                  Register
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
