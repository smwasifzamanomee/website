import {
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  FaArrowCircleDown,
  FaArrowDown,
  FaCheckCircle,
  FaEdit,
  FaMailBulk,
  FaTrashAlt,
  FaVoicemail,
} from "react-icons/fa";
import { operationsData, statusData, positionData } from "../../../data/data";
import {
  getApplications,
  updateApplications,
} from "../../../hooks/react-query/applicationApi";
import MobileGrid from "./MobileGrid";
import Operations from "./Operations";
import Positions from "./Positions";
import Search from "./Search";
import SendMailModal from "./SendMailModal";
import Status from "./Status";
import StatusForm from "./StatusForm";
import TableCol from "./TableCol";

import TableRow from "./TableRow";

const Table = (props) => {
  const router = useRouter();
  const [isStatus, setIsStatus] = useState({
    isHas: false,
    name: "status",
  });
  const [isOperation, setIsOperation] = useState({
    isHas: false,
    name: "opearation",
  });
  const [isPosition, setIsPosition] = useState({
    isHas: false,
    name: "position",
  });
  const [actionFrom, setActionForm] = useState("");
  const [operationSelected, setOperationSelected] = useState("action");
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [checkedData, setCheckedData] = useState([]);
  const queryClient = useQueryClient();
  const [applicationsIds, setApplicationsIds] = useState([]);
  const {
    isLoading,
    data: items,
    isError,
    error,
  } = useQuery({ 
    queryKey: ["applications"], 
    queryFn: getApplications,
    initialData: props?.allApplications
  });

  // Mutations
  const {
    data,
    error: sendemailError,
    isError: sendemailIsError,
    isLoading: sendemailIsLoading,
    mutate,
  } = useMutation({
    mutationFn: updateApplications,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
  });

  
  // useEffect(() => {
  //   setApplications(items?.results)
  // }, [])
  if (isLoading || sendemailIsLoading) return <div>Loading...</div>;
  if (isError || sendemailIsError) {
    if (
      error?.response?.status === 401 ||
      sendemailError?.response?.status === 401
    ) {
      return router.push("/");
    }
    return;
  }



  const handleStatus = () => {}
  const handleEmailSend = () => {}
  

  const handleChecked = e => {
    const { value, checked } = e.target;
    if(checked){
      setApplicationsIds([...applicationsIds, value]);
    }
    else{
      setApplicationsIds(applicationsIds?.filter(id => id !== value));
    }
  }

  const handleAllChecked = e => {
    const {value, checked} = e.target;
    if(checked){
      setApplicationsIds(items?.results.map(item => item?.id))
    }
    else{
      setApplicationsIds([])
    }
  }

  console.log(applicationsIds);

  return (
    <div className={` relative `}>
      {actionFrom.includes("send email") && (
        <SendMailModal
          setActionForm={setActionForm}
          handleEmailSend={handleEmailSend}
          setOperationSelected={setOperationSelected}
        />
      )}

      {actionFrom.includes("edit status") && (
        <StatusForm handleStatus={handleStatus} setActionForm={setActionForm} />
      )}

      <div className="flex md:flex-col sm:flex-col items-center justify-between py-5 gap-y-6">
        <Operations
          item={operationsData}
          setIsOperation={setIsOperation}
          isOperation={isOperation}
        />
        {isOperation?.name === "send email" && (
          <FaVoicemail
            onClick={() => setActionForm("send email")}
            className="text-light text-[30px] m-1 border border-primary p-1"
          />
        )}
        {isOperation?.name === "edit status" && (
          <FaEdit
            onClick={() => setActionForm("edit status")}
            className="text-light text-[30px] m-1 border border-primary p-1"
          />
        )}
        {isOperation?.name === "delete" && (
          <FaTrashAlt className="text-light text-[30px] m-1 border border-primary p-1" />
        )}
        <Search inputValue={inputValue} setInputValue={setInputValue} />

        <Status
          item={statusData}
          setIsStatus={setIsStatus}
          isStatus={isStatus}
        />
        <Positions
          item={positionData}
          setIsPosition={setIsPosition}
          isPosition={isPosition}
        />
      </div>

      <div
        className={`overflow-auto rounded-lg shadow xl:block lg:block hidden 
        ${
          actionFrom.includes("send email") ||
          (actionFrom.includes("edit status") && "opacity-30")
        }`}
      >
        <table className="w-full divide-y divide-gray-500">
          <thead className="bg-gray-500">
            <TableCol  
            handleAllChecked={handleAllChecked} 
            isChecked={isChecked} 
            // items={applications?.results}
            />
          </thead>

          <tbody>
            {items ? items?.results?.filter((item) =>
                item.full_name.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((item) => (
                <TableRow
                  key={item.id}
                  item={item}
                  isChecked={isChecked}
                  operationSelected={operationSelected}
                  applicationsIds={applicationsIds}
                  onChange={handleChecked}
                />
              )) : <div className="flex items-center justify-center text-5xl font-bold text-light">Comming</div>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const allApplications = await getApplications()
  return { props: { allApplications } }
}

export default Table;
