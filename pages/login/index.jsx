import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import HeadTitle from "../../components/UI/HeadTitle";
import TopHeading from "../../components/UI/TopHeading";
import { adminLogin } from "../../hooks/react-query/applicationApi";
import HorizontalLayout from "../../layouts/HorizontalLayout";
import VerticalLayout from "../../layouts/VerticalLayout";
import Main from "./main";

const Login = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  // Mutations
  const {
    data,
    error,
    isError,
    isLoading,
    mutate,
  } = useMutation({
    mutationFn: adminLogin,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["adminLogin"] });
    },
  });

  if(isLoading) return <div>Loading...</div>
  if(isError) return console.log(error)
  // console.log(data);
  if(data){
    // useUserCredential(data?.email)
    // localStorage.setItem('access', data?.access);
    localStorage.setItem('email', data?.email);
    router.push('/')
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    mutate({
      email: email,
      password: password
    });
  }


  return (
    <>
      <HorizontalLayout>
        <TopHeading title={'Login'} />
        <HeadTitle title={'Login'} />
        <Main handleLogin={handleLogin} />
      </HorizontalLayout>
      <VerticalLayout>
        <TopHeading title={'Login'} />
        <HeadTitle title={'Login'} />
        <Main handleLogin={handleLogin} />
      </VerticalLayout>
    </>
  );
};

export default Login;
