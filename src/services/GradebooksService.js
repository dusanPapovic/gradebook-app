import HttpService from "./HttpService";

class GradebooksService extends HttpService {
  getGradebooks = async () => {
    const { data } = await this.client.get("/gradebooks");
    return data;
  };
}

const gradebooksService = new GradebooksService();
export default gradebooksService;