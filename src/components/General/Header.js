import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { menu } from '@/data/menu'
import img from '../../../public/photo/logo.png'
import Image from 'next/image'


export default function Header() {
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleCloseMobile)
    return () => document.removeEventListener('click', handleCloseMobile)
  }, [])

  const handleCloseMobile = () => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsShowMenuMobile(false)
    }
  }

  return (
    <header className="border-b border-slate-500 mb-5 bg-orange-900">
      <div className="flex flex-row">
        <div className="mt-2 ml-2">
          <Image
            width={60}
            height={60}
            src={img}
            alt=""
            className="w-full mt-6 md/w-1/2 h-full object-cover scale-125"
          />
        </div>

        <div className="container mx-auto flex p-5 w-full text-white ">
          <div className="logo justify-start font-TitanOne text-xl">
            <Link href="/">
              <a>KOFU</a>
            </Link>
          </div>
          <ul className="gap-5 hidden lg:flex ml-nav justify-end space-x-4">
            {menu.map((value, index) => (
              <li key={index}>
                <Link href={value.href}>
                  <a>{value.label}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="block lg:hidden justify-end ml-auto ">
            <button onClick={() => setIsShowMenuMobile(true)} ref={menuRef}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isShowMenuMobile && (
        <div className="fixed w-full top-0 left-0 h-full bg-white text-center text-2xl p-5 z-50">
          <ul>
            {menu.map((value, index) => (
              <li key={index} className="border-b py-3">
                <Link href={value.href}>
                  <a>{value.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
