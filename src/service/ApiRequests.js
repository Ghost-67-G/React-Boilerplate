import { APIurls } from "./constants.js";
import apiService from ".";
import multipart from "./multipart.js";

export const ApiRequests = {
  //user Authentication
  login: async (data) => await apiService.post(APIurls.login, data),
  logout: async (data) => await apiService.post(APIurls.logout, data),
  register: async (data) => await apiService.post(APIurls.register, data),
  authenticate: async () => await apiService.get(APIurls.authenticate),
  refreshTokens: async (data) => await apiService.post(APIurls.refreshTokens, data),
  revokeToken: async (data) => await apiService.post(APIurls.revokeToken, data),
};


