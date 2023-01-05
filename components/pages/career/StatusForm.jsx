const StatusForm = ({ handleStatus, setActionForm }) => {
    return (
      <div className=" absolute top-[110px]  w-full h-full ">
        <form
          className="xl:w-[500px] lg:w-[400px] py-12 mx-auto border shadow bg-dark text-light p-5 z-10 relative"
          onSubmit={handleStatus}
        >
          <span
            onClick={() => setActionForm("")}
            className=" absolute right-4 top-2 cursor-pointer border text-3xl text-primary px-2"
          >
            X
          </span>
          <div className="flex flex-col gap-y-1 my-4">
            <label className=" font-bold">Status</label>
            <input
              className="text-gray-600 py-2 rounded outline-none border px-3"
              type={"text"}
              name={"status"}
              required
              autoComplete="off"
            />
          </div>

          <input
            type="submit"
            value="Edit status"
            className="py-3 px-6 bg-light text-dark  rounded font-semibold"
          />
        </form>
      </div>
    );
  };
  
  export default StatusForm;
  