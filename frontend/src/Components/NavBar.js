import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import WorldCusine from './World_Cusine.png'

function NavBar() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <nav className='relative flex flex-wrap items-center justify-between bg-[#5E3D2B] mb-3 shadow-[0px_10px_50px_1px_rgba(0,0,0,0.50)] sticky top-0 z-50'>
      <div className='container px-2 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <h1 className='text-4xl	 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'>
            <Link to='/'>
              <img
                src={WorldCusine}
                alt='logo'
                width={100}
                className='transform scale-125'
              />
            </Link>
          </h1>
          <button
            className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavOpen(!navOpen)}
          >
            <FontAwesomeIcon icon={faBars} size='xl' />
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' + (navOpen ? ' flex' : ' hidden')
          }
        >
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            <li>
              <h1 className='px-3 py-2 flex items-center text-4xl uppercase font-bold leading-snug text-white hover:opacity-75'>
                <Link to='/foods'>Dish</Link>
              </h1>
            </li>
            <li>
              <h1 className='px-3 py-2 flex items-center text-4xl	uppercase font-bold leading-snug text-white hover:opacity-75'>
                <Link to='/foods/new'>New Dish</Link>
              </h1>
            </li>
            <li>
              <h1 className='px-3 py-2 flex items-center text-4xl uppercase font-bold leading-snug text-white hover:opacity-75'>
                <Link to='/reviews'>reviews</Link>
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
