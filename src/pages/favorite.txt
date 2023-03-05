import React from 'react'
// import Link from 'next/link'
import Head from 'next/head'

const Contact = () => (
  <section id="contact" className="relative">
    <Head>
      <title>Contact - Maharani B'anica Putri</title>
      <meta name="description" content="Contact Mathilde Langevin" />
    </Head>

    <div className="h-screen">
      <img
        src="/photo/pexels-mathilde-langevin-contact.jpg"
        alt="contact"
        className="w-full h-full object-cover"
      />
    </div>
    <div className=" w-72 md:w-1/2 h-fit md:h-[625px] bg-[#F2F5EB] absolute z-10 top-10 right-10 p-5 grid bg-opacity-50 place-content-center text-amber-800 py-12">
      <div className="md:px-0 md:pt-auto">
        <h1 className="text-3xl md:text-5xl md:mt-0 mb-5">
          <span>Contact me</span> <br />
          {/* <span className="font-bold">Me</span> */}
        </h1>
        <p className="">
          my email only for you
          <br /> you can contact me at my social media instagram or phone
        </p>
      </div>
      
      <nav className="mt-10">
        

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              <tr class="bg-white dark:bg-gray-800 flex md:flex-row flex-col">
                <td class="px-6 py-4 w-1/4">Email</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <a
                    href="mailto:maharanibanicaputri@gmail.com"
                    target="_blank"
                    className="hover:text-orange-900 "
                  >
                    maharanibanicaputri@gmail.com
                  </a>
                </th>
              </tr>
              <tr class="bg-white dark:bg-gray-800 flex md:flex-row flex-col">
                <td class="px-6 py-4 w-1/4">instagram</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <a
                    href="https://instagram.com/maharaniiibp/"
                    target="_blank"
                    className="hover:text-orange-900  "
                  >
                    @maharaniiibp
                  </a>
                </th>
              </tr>
              <tr class="bg-white dark:bg-gray-800 flex md:flex-row flex-col">
                <td class="px-6 py-4 w-1/4">Github</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <a
                    href="https://github.com/maharaniiibp/"
                    target="_blank"
                    className="hover:text-orange-900  "
                  >
                    @mhrnibp
                  </a>
                </th>
              </tr>
              <tr class="bg-white dark:bg-gray-800 flex md:flex-row flex-col">
                <td class="px-6 py-4 w-1/4">LinkedIn</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <a
                    href="https://www.linkedin.com/in/maharani-b-anica-putri-16bb7b21a/"
                    target="_blank"
                    className="hover:text-orange-900  "
                  >
                    Maharani B'anica Putri
                  </a>
                </th>
              </tr>
              <tr class="bg-white dark:bg-gray-800 flex md:flex-row flex-col">
                <td class="px-6 py-4 w-1/4">Phone</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <a
                    href="https://wa.me/6285736541626"
                    target="_blank"
                    className="hover:text-orange-900 "
                  >
                    085736541626{' '}
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </nav>
    </div>
  </section>
)

export default Contact
