import http from "@/plugins/axios";
class FileStoreService {
  getAll (): Promise<any> {
    return http.get("/api/filemanager");
  }

  get (path: string): Promise<string> {
    return http.get(`/filemanager/${path}`);
  }
}

export default new FileStoreService();
