import HttpService from "./HttpService";

class GradebooksService extends HttpService {
  getGradebooks = async (name= "",page=1) => {
    let endpoint = "/gradebooks"; 
    let query=[];
    if (name) {
      query.push(`name=${name}`);
    }
    if (page) {
      query.push(`page=${page}`);
    } 
let query2=query.join("&");
   endpoint += `?${query2}`;

console.log('endpoint',endpoint);
    const { data } = await this.client.get(endpoint);
    return data;
  };
}

const gradebooksService = new GradebooksService();
export default gradebooksService;