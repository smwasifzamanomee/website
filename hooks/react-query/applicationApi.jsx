import axios from "axios";

const applicationApi = axios.create({
  baseURL: `http://192.168.0.180:6970/api/v1/admin/career-applications/`,
});

const adminLogin = async (credential) => {
  const res = await axios.post(
    "http://192.168.0.180:6970/api/v1/admin/login/",
    credential
  );
  if (res.status === 401 || res.status === 404 || res.status === 500) {
    alert("Error");
  }
  return res.data;
};



const getApplications = async () => {
  const res = await applicationApi.get("/");
  return res.data;
};

const addApplication = async (application) => {
  const res = await axios.post(
    "http://192.168.0.180:6970/api/v1/admin/career-applications/create/",
    application
  );
  if (res.status === 401 || res.status === 404 || res.status === 500) {
    alert("Error");
  }
  return res.data;
};

const updateApplications = async (application) => {
  const res = await applicationApi.post(`/edit-status/`, application);
  if (res.status === 401 || res.status === 404 || res.status === 500) {
    alert("Error");
  }
  return res.data;
};

const deleteApplication = async (application) => {
  const res = await applicationApi.delete(`/${application?.id}`, application);
  if (res.status === 401 || res.status === 404 || res.status === 500) {
    alert("Error");
  }
  return res.data;
};

export {
  getApplications,
  addApplication,
  updateApplications,
  deleteApplication,
  adminLogin,
};
