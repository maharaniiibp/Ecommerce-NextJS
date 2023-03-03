import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function AboutMe() {
  const data = [
    { gambar: '/photo/1.jpg', nama: 'Best Restaurant in Indonesia' },
    { gambar: '/photo/2.jpg', nama: 'Best Kinerja 2023' },
    { gambar: '/photo/3.jpg', nama: 'Restaurant terbersih di dunia' },
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
          <p className="text-justify">
            Kofu adalah Restaurant pertama kali di Indonesia yang memiliki menu
            beragam khas korea yang pas dengan lidah orang Indonesia. Kofu
            didirikan pada tahun 2018. Menyediakan beragam menu viral spicy and
            non-spicy. Memperoleh beragam sertifikat sebagai Best-Restaurant in
            Indonesia dengan kelezatan masakan yang dijual, Penjualan yang
            paling luar biasa di tahun 2023 karena sangat ramai pengunjung,
            restaurant terbersih di dunia dengan tempat yang comfortable, dan
            sudah mendapatkan sertifikasi halal sehingga muslim juga dapat
            menikmati masakan dari korea
          </p>
          <br />
          Alamat : Jl. Amazon Kota Jakarta Timur
        </div>
        <div className="w-full md:w-2/3 mt-10 lg:mt-0 mb-5 md:mb-0 md:h-[400px] md:mx-auto  ">
          {/* video youtube */}
          <iframe
            className="w-full h-full aspect-video"
            width={'auto'}
            height={'auto'}
            src="https://www.youtube.com/embed/fFaEIQacPCo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <span className="text-center font-bold text-5xl mb-12 mt-[18px] ">
        Our Certificate
      </span>
      <div className="mb-24 flex gap-8 py-9 lg:flex-row flex-wrap justify-center mx-auto">
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {data.map((data) => (
            <li className="bg-orange-900 rounded-md overflow-hidden mx-8 mb-4 w-36 md:w-60 hover:shadow-2xl text-left p-4">
              <Image
                width={300}
                height={350}
                src={data.gambar}
                alt=""
                className="w-72 md:w-80 h-24 md:h-44 items-center object-contain rounded-md mx-auto mb-2"
              />
              <p className="text-base mb-2 text-white text-center">
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
