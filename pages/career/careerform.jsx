import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HorizontalLayout from "../../layouts/HorizontalLayout";
import VerticalLayout from "../../layouts/VerticalLayout";
import HeadTitle from "../../components/UI/HeadTitle";
import TopHeading from "../../components/UI/TopHeading";
import CareerFormMain from "../../components/pages/career/CareerFormMain";
import {addApplication} from '../../hooks/react-query/applicationApi';

const CareerForm = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { position } = router.query;

  const [state, setState] = useState({
    full_name: "",
    email: "",
    resume: "",
    cover_letter: "",
    position: "",
  });

  useEffect(() => {
    if (typeof position === "undefined") {
      <div>Loading..</div>;
    }
    setState((prev) => ({ ...prev, ["position"]: position }));
  }, [position]);

  // file to base 64
  const base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // Mutations
  const { data, error, isError, isLoading, mutate } = useMutation({
    mutationFn: addApplication,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return console.log(error);

  // if data return true then we will redirect to home page after 100ms
  if (data) {
    setTimeout(() => {
      alert(data[0]);
    }, 100);
    router.push({
      pathname: "/",
    });
  }

  // handleCandidate form
  const handleCandidateCredential = async (e) => {
    e.preventDefault();
    const resumeData = await base64(e.target.resume.files[0]);

    const credential = {
      full_name: state.full_name,
      email: state.email,
      position: state.position,
      cover_letter: state.cover_letter,
      resume: resumeData.split(",")[1],
    };

    try {
      mutate(credential);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HorizontalLayout>
        <HeadTitle title={"Career From"} />
        <TopHeading title={"Candidate Credential"} />

        <CareerFormMain
          handleCandidateCredential={handleCandidateCredential}
          setState={setState}
          state={state}
        />
      </HorizontalLayout>

      <VerticalLayout>
        <HeadTitle title={"Career From"} />
        <TopHeading title={"Candidate Credential"} />

        <CareerFormMain
          handleCandidateCredential={handleCandidateCredential}
          setState={setState}
          state={state}
        />
      </VerticalLayout>
    </>
  );
};

export default CareerForm;
