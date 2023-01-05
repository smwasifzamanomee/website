import Container from "../../UI/Container"
import FormInput from "../../UI/FormInput"
import FormTextArea from '../../UI/FormTextArea';

const CareerFormMain = ({handleCandidateCredential, setState, state}) => {
  return (
    <Container bgColor={"bg-dark"}>
    <form
         onSubmit={handleCandidateCredential}
         className="py-10 w-[500px] h-[700px] sm:w-auto mx-auto border border-gray-600 p-5 rounded"
       >
         <FormInput
           setValue={setState}
           value={state?.full_name}
           type={"text"}
           label="FullName"
           name={"full_name"}
         />
         <FormInput
           setValue={setState}
           value={state?.email}
           type={"email"}
           label="Email"
           name={"email"}
         />

         <div className="flex flex-col gap-y-1 my-4">
           <label className="text-light font-bold" htmlFor="email">
             Upload your resume
           </label>
           <input
             className="py-2 rounded outline-none border px-3"
             type={"file"}
             name="resume"
             id="email"
             required
           />
         </div>

         <FormInput
           type={"text"}
           label={"Position"}
           name="position"
           value={state?.position}
           setValue={setState}
           readonly={true}
         />

         <FormTextArea
           label={"Cover Letter"}
           name="cover_letter"
           value={state?.cover_letter}
           setValue={setState}
         />

         <button
           type="submit"
           className="outline-none border-none py-3 px-10 bg-light text-dark"
         >
           Send
         </button>
       </form>
     </Container>
  )
}

export default CareerFormMain