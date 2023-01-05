import { FaArrowCircleDown, FaCheckCircle } from "react-icons/fa"

const Positions = ({item, setIsPosition, isPosition}) => {
  return (
    <div className={'w-[180px] md:w-full sm:w-full'}>
    <div
      onClick={() => setIsPosition({
          isHas: !isPosition?.isHas,
          name: isPosition?.name
      })}
      className="flex items-center justify-between gap-x-2 border p-1 px-2 rounded cursor-pointer"
    >
      <span className=" capitalize text-gray-300 text-[14px]">
          {isPosition?.name}
      </span>

      <FaArrowCircleDown className="text-light" />
    </div>

    {isPosition?.isHas && (
      <ul className=" w-[180px] absolute bg-light mt-4 shadow border z-10 py-2 top-16">
        {item.map((item) => (
          <li
            key={item.id}
            onClick={() => setIsPosition({
              name: item?.name
            })}
            className=" flex items-center gap-x-2 capitalize hover:bg-gray-50 text-gray-600 cursor-pointer text-[14px] py-1 px-2"
          >
            <FaCheckCircle /> {item.name}
          </li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default Positions