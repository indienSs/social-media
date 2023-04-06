import axios from "axios";
import {mockapiUrl} from "./mockapiUrl"

const instance = axios.create({
  baseURL: mockapiUrl,
});

export default instance;
