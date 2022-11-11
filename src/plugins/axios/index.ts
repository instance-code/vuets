import axios from "axios";
import { setupInterceptorsTo } from "@/plugins/axios/interceptors";

export default setupInterceptorsTo(axios);
