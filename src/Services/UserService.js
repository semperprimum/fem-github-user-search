import axios from "axios";

export default class UserService {
  static async getUserByName(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
