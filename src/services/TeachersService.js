import HttpService from "./HttpService";

class TeachersService extends HttpService {
  getTeachers = async (name = "") => {
    let endpoint = "/teachers";
    if (name) {
      endpoint += `?name=${name}`;
    }
    const { data } = await this.client.get(endpoint);
    return data;
  };
}

const teachersService = new TeachersService();
export default teachersService;