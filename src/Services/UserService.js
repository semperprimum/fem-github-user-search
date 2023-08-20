import axios from "axios";

export default class UserService {
  static async getUserByName(username) {
    return await axios.get(`https://api.github.com/users/${username}`);
  }
}
