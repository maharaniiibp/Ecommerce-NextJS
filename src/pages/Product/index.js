'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])

  const url = 'https://api.jsonbin.io/v3/b/640fc5e9ebd26539d08e3227'
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch(url)
        const result = await data.json()
        console.log(result.record)
        setData(result.record)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const [search, setSearch] = useState('')
  const [isLoading] = useState(false)
  // const [searchParam] = useState(['name', 'description', 'category'])
  const [labelCategory] = useState([
    { value: 'All', label: 'All Food' },
    { value: 'Spicy', label: 'Spicy' },
    { value: 'Non Spicy', label: 'Non Spicy' },
  ])
  const [filterParam, setFilterParam] = useState('All')
  const [product, setProduct] = useState(data)


  useEffect(() => {
    setProduct(data)
  }, [])

  useEffect(() => {
    console.log(filterParam)
    const searchTerm = search.toLowerCase()
    const filteredData = data.filter((  item) =>
      item.name.toLowerCase().includes(searchTerm)
    )
    setProduct(filteredData)
  }, [filterParam, search, data])

  console.log(filterParam)

  useEffect(() => {
    if (filterParam === 'All') {
      setProduct(data)
    } else {
      console.log(filterParam)
      const filter = data.filter(
        (item) => item.category.toLowerCase() === filterParam.toLowerCase()
      )
      setProduct(filter)
      console.log(product)
    }
  }, [filterParam])

  return (
    <div className="container mx-auto mb-16">
      <div className="text-center font-bold">
        <h1 className="text-4xl text-orange-900 mb-8 mt-20">
          Mamam duluuu ok!
        </h1>
      </div>
      

      <div className="flex max-w-lg rounded overflow-hidden my-4 mx-auto mt-0 space-x-4">
        <form className="w-full max-w-sm bg-white/60 p-1">
          <div className="flex items-center border-b-2 border-orange-900 py-2">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Find your Food..."
            />
          </div>
        </form>
        <div className="place-items-center flex-2">
          <select
            onChange={(e) => {
              setFilterParam(e.target.value)
            }}
            className="custom-select px-4 py-3 rounded-md hover:bg-stone-200  text-orange-900"
            aria-label="Filter Food By Category"
          >
            {labelCategory.map((item) => {
              return <option value={item.value}>{item.label}</option>
            })}
          </select>
          <span className="focus"></span>
        </div>
      </div>
      {!isLoading && data.length === 0 && (
        <div class="flex items-center justify-center mt-20">
        <div class="relative">
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-xl"></div>
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl"></div>
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
          <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white">
            <div class="p-8">
              <svg class="animate-spin -ml-1 mr-3 h-16 w-16 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm12 0l3 2.647A7.962 7.962 0 0120 12h-4zm-8-10v-4H8v4H4v2h4v4h2v-4h4v-2h-4z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      
      
      
      )}
      {data.length !== 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          { product.map((image) => (
                <div>
                  <div
                    key={image.id}
                    image={image}
                    coba={image.image}
                    className="bg-stone-200 lg:w-60 rounded-md overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ... bg-no-repeat "
                  >
                    <img
                      src={image.image}
                      alt=""
                      className="w-full h-80 md:h-48 object-contain p-2 my-2"
                    />
                    <div className="px-6 py-2 mb-4 h-48">
                      <div className="font-extrabold text-orange-900 text-lg text-justify mb-3 -mt-5">
                        {image.name}
                      </div>
                      <div className="text-black">
                        <ul>
                          <li>{image.description}</li>
                          <li className="text-md m">
                            <strong>{image.price}</strong>
                          </li>
                        </ul>
                        <div className="bg-orange-900 p-2 w-16 h-10 text-center rounded text-white">
                          <Link href={`/${image.id}`} key={image.id}>
                            Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
      )}
    </div>
  )
}

export default App
