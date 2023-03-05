import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function AboutMe() {
  const data = [
    { gambar: '/photo/1.jpg', nama: 'Best Restaurant in Indonesia' },
    { gambar: '/photo/2.jpg', nama: 'Best Kinerja tahun 2023' },
    { gambar: '/photo/3.jpg', nama: 'Restaurant terbesih di dunia' },
    { gambar: '/photo/4.jpg', nama: 'Sertifikasi halal' },
  ]

  return (
    <section
      id="about KOFU"
      className="flex flex-col lg:gap-14 lg:flex-col w-full"
    >
      <Head>
        <title>About KOFU</title>
        <meta name="description" content="About Kofu" />
      </Head>
      <div className="wrapper flex flex-col-reverse md:flex-row gap-x-24 w-full">
        <div className="mb-auto mt-8 space-y-5 w-80 md:w-1/3 grid place-content-center text-center md:text-left mx-auto md:mx-0">
          <h1 className="text-5xl ">
            <span className="font-bold">About KOFU</span>
          </h1>
          <p>Hallo!!👋</p>
          <p>Kofu didirikan pada tahun 2018. Restaurant pertama yang memiliki menu beragam khas korea yang pas dengan lidah orang Indonesia. Menyediakan beragam menu viral spicy and non-spicy. Memperoleh beragam sertifikat sebagai Best-Restaurant in Indonesia, Penjualan yang paling luar biasa di tahun 2023, restaurantterbesih di dunia, dan mendapatkan sertifikasi halal</p>
        </div>
        <div className="w-full md:w-2/3 mt-10 lg:mt-0 mb-5 md:mb-0 md:h-[700px] md:mx-auto  ">
          {/* video youtube */}
          <iframe
            className="w-800 h-600 mx-auto "
            src="https://www.youtube.com/embed/fFaEIQacPCo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <span className="text-center font-bold text-5xl mb-80 ">
        Our Certificate
      </span>
      <div className="mb-80 flex gap-8 py-9 lg:flex-row flex-wrap justify-center mx-auto">
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {data.map((data) => (
            <li className="bg-white rounded-md overflow-hidden m-auto mx-8 mb-4 w-36 md:w-60 hover:shadow-2xl text-left p-4">
              <Image
                width={300}
                height={350}
                src={data.gambar}
                alt=""
                className="w-72 md:w-80 h-24 md:h-44 items-center object-contain rounded-md mx-auto mb-2"
              />
              <p className="text-base">
                <strong>{data.nama}</strong>
              </p>
              <p className="text-sm mb-2">{data.tanggal}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
