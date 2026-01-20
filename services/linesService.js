
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export async function getLines() {
  const response = await api.get("/linhas");
  return response.data;
}
export { api };