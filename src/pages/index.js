import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10">
      <Head>
        <title>Korean Food</title>
        <meta
          name="description"
          content="Home page Maharani B'anica Putri Portfolio"
        />
      </Head>
      <div className="grid place-content-center text-center lg:text-left">
        <h1 title="Mathilde Langevin" className="text-[80px] leading-[70px] font-">
          KOFU
        </h1>
        <div className="my-10 mb-10 space-y-5 text-2xl lg:mb-28 w-80 md:w-[700px]">
          <div className="flex flex-col">
            <span className="font-light">Korean Food</span>
            </div>
          <div className='text-justify'>
          Hidangan Korea adalah makanan tradisional yang dibuat berdasarkan pada teknik dan cara memasak orang Korea. Masakan Korea memiliki keunikan tersendiri, mulai dari kuliner istana sampai makanan khas daerah serta perpaduan masakan modern. Bahan-bahan yang digunakan serta cara penyiapannya juga sangat berbeda. Banyak sekali makanan Korea yang sudah mendunia.
          </div>
          <div className='text-justify'>
           Masakan korea yang dijabarkan berbeda dengan kuliner istana yang sampai saat ini juga dinikmati sebagian besar masyarakat Korea.
          </div>

        </div>
        <nav>
        
          <Link href="./About">
            <a className="border bg-slate-700 text-white border-slate-200 p-5 px-10">
              About Us
            </a>
          </Link>
        </nav>
      </div>
     
      <div className="mt-10 w-1/2 h-[300px] lg:w-1/2 lg:h-[700px] lg:mt-0 mx-auto">
        <img
          src="/photo/pexels-mathilde-langevin-home.jpg"
          alt="Mathilde"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
