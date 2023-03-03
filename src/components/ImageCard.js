import React from 'react'

const ImageCard = ({ image }) => {
  const descproduct = image.description
  const res = descproduct.substr(0, 50)

  return (
    <div className="bg-sky-100 lg:w-80 rounded-md overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ... bg-no-repeat ">
      <img
        src={image.image}
        alt=""
        className="w-full h-35 md:h-48 object-contain p-2 my-5"
      />
      <div className="px-6 py-8">
        <div className="font-extrabold text-blue-700 text-lg text-justify mb-3">
          {image.name}
        </div>
        <div className="text-black">
          <ul>
            <li>{res}..</li>
            <li className="text-md m">
              <strong>{image.price}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
