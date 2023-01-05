import Container from "../../components/UI/Container"

const Main = ({handleLogin}) => {
  return (
  <Container bgColor={'bg-dark'} height='min-h-[600px]' className={'flex items-center justify-center'}>
      <form 
      className=" w-[500px] md:w-full sm:w-full mx-auto min-h-[450px] border border-primary p-4"
      onSubmit={handleLogin}>
        <h1 className="text-light my-10 text-center text-4xl font-bold">Login</h1>
    <div className="flex flex-col gap-y-1 my-4 ">
      <label className="text-light font-bold" htmlFor={"email"}>
        Email
      </label>
      <input
        className="py-2 rounded outline-none border px-3"
        type={"email"}
        name={"email"}

        required
        autoComplete="off"
      />
    </div>
    <div className="flex flex-col gap-y-1 my-4">
      <label className="text-light font-bold" htmlFor={"password"}>
        Password
      </label>
      <input
        className="py-2 rounded outline-none border px-3"
        type={"password"}
        name={"password"}
        required
        autoComplete="off"
      />
    </div>
    <input type="submit" value="Login" className="py-3 px-6 border-none outline-none bg-lime-50 text-dark rounded"/>
  </form>
  </Container>
  )
}

export default Main