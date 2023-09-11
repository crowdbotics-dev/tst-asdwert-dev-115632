import axios from "axios"
import {
  TEST_CONNECTOR_BASIC_AUTH_USERNAME,
  TEST_CONNECTOR_BASIC_AUTH_PASSWORD
} from "react-native-dotenv"
const lalala = axios.create({
  baseURL: "https://lala.com",
  auth: {
    username: TEST_CONNECTOR_BASIC_AUTH_USERNAME,
    password: TEST_CONNECTOR_BASIC_AUTH_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
