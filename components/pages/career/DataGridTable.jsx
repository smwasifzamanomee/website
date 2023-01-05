// import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../../../hooks/react-query/applicationApi";

const DataGridTable = () => {
  const {
    isLoading,
    data: applications,
    isError,
    error,
  } = useQuery({ queryKey: ["applications"], queryFn: getApplications });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return;
  console.log(applications?.results);

  return (
    <>

    </>
  );
};

export default DataGridTable;
