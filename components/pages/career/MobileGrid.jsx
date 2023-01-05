import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const MobileGrid = ({operationsData, operationSelected, setIsOperation, setOperationSelected, applications, inputValue, isOperation}) => {
  return (
    <div
    className={`hidden sm:grid md:grid grid-cols-1 gap-6 ${
      operationSelected === "send email" && "opacity-30"
    }`}
  >
    {/* Sort */}
    <div className="w-[300px] md:w-full sm:w-full my-4">
      <div
        onClick={() => setIsOperation((prev) => !prev)}
        className="flex items-center justify-between bg-gray-100 p-3 rounded cursor-pointer"
      >
        <span className=" capitalize">{operationSelected}</span>
        <span>
          <FaArrowUp /> <FaArrowDown />
        </span>
      </div>

      {isOperation && (
        <ul className=" absolute w-[300px] md:w-full sm:w-full bg-gray-50 mt-4 shadow border z-10 py-2 ">
          {operationsData.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                setOperationSelected(item.name);
                setIsOperation((prev) => !prev);
              }}
              className=" capitalize py-1 pl-6 hover:bg-gray-200 cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>

    {applications?.results
      ?.filter((item) =>
        item.full_name.toLowerCase().includes(inputValue.toLowerCase())
      )
      .map((item, index) => (
        <div key={item.id} className="space-y-2 border shadow-sm p-3">
          <div className="flex items-center justify-between ">
            <span>{index + 1}</span>
            <span>{item.full_name}</span>
          </div>
          <p>{item.position}</p>
          <p>{item.cover_letter}</p>
          <a
            href={`${item.resume}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      ))}
  </div>
  )
}

export default MobileGrid