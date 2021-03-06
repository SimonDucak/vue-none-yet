import axios from "axios";

const url = "http://localhost:8081/api/";

class ProjectService {
  static getProjects() {
    return new Promise(async (resolve,reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static getProject(urlPath) {
    return new Promise(async (resolve,reject) => {
      try {
        const res = await axios.get(url + urlPath);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static createProject(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const req = await axios.post(url,data);
        const res = req.data;
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default ProjectService;