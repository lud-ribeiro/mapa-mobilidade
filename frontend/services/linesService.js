import { api } from "./api";

export async function getLines() {
  const res = await api.get("/linhas");
  return res.data;
}
