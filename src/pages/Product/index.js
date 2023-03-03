'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { data } from '../../data/data'

function App() {
  const [search, setSearch] = useState('')
  const [isLoading] = useState(false)
  const [q] = useState('')
  const [searchParam] = useState(['name', 'description', 'category'])
  const [labelCategory] = useState([
    { value: 'All', label: 'All Food' },
    { value: 'Spicy', label: 'Spicy' },
    { value: 'Non Spicy', label: 'Non Spicy' },
  ])
  const [filterParam, setFilterParam] = useState('All')
  const [product, setProduct] = useState(data)

  function cari(data) {
    isLoading(true)
    return data.filter((item) => {
      if (data.category == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          )
        })
      } else if (filterParam == 'All') {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          )
        })
      }
      isLoading(false)
    })
  }

  useEffect(() => {
    setProduct(data)
  }, [])

  useEffect(() => {
    console.log(filterParam)
    const searchTerm = search.toLowerCase()
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    )
    setProduct(filteredData)
  }, [filterParam, search])

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
      <div className="text-center text-orange-900 text-lg mb-8">
        <p>{product.length} Food found</p>
      </div>
      {isLoading && (
        <h1 className="text-5xl text-center mx-auto mt-32">Loading ...</h1>
      )}
      {!isLoading && data.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">Images Not Found</h1>
      )}
      {data.length !== 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {product
            ? product.map((image) => (
                <Link href={`/${image.id}`} key={image.id}>
                  <div
                    key={image.id}
                    image={image}
                    coba={image.image}
                    className="bg-stone-200 lg:w-80 rounded-md overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ... bg-no-repeat "
                  >
                    <img
                      src={image.image}
                      alt=""
                      className="w-full aspect-[3/2] h-80 md:h-48 object-contain p-2 my-5"
                    />
                    <div className="px-6 py-8">
                      <div className="font-extrabold text-orange-900 text-lg text-justify mb-3">
                        {image.name}
                      </div>
                      <div className="text-black">
                        <ul>
                          <li>{image.description}</li>
                          <li className="text-md m">
                            <strong>{image.price}</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            : data.map((image) => (
                <Link href={`/${image.id}`} key={image.id}>
                  <div
                    key={image.id}
                    image={image}
                    coba={image.image}
                    className="bg-stone-200 lg:w-80 rounded-md overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ... bg-no-repeat "
                  >
                    <img
                      src={image.image}
                      alt=""
                      className="w-full h-80 md:h-48 object-contain p-2 my-5"
                    />
                    <div className="px-6 py-8">
                      <div className="font-extrabold text-orange-900 text-lg text-justify mb-3">
                        {image.name}
                      </div>
                      <div className="text-black">
                        <ul>
                          <li>{image.description}</li>
                          <li className="text-md m">
                            <strong>{image.price}</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      )}
    </div>
  )
}

export default App
