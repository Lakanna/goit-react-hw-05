import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjJjMWVjNTM1YWVhNWJhMTEwYjMzNTM2NzNiNzliMyIsIm5iZiI6MTcyMzkyODEwOS41OTA5OTYsInN1YiI6IjY2YzEwYmM4NjJjYjVmNjlkYTE2YWQ3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Jr4S-hFFyTGB-UPQ3vcYr0Ahmk1mETjvYJWA_QAWw8";

export default async function fetchData(page = 1, query = "", endPoint) {
  const params = {
    page,
    query,
    api_key: "ef2c1ec535aea5ba110b3353673b79b3",
  };
  const respons = await axios.get(`${endPoint}`, { params });

  return respons.data;
}
