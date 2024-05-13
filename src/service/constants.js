export const basePath = process.env.REACT_APP_basePath ?? "http://localhost:3001"

export const APIurls = {
  login: "auth/login",
  refreshTokens: "auth/refresh-tokens",
  register: "auth/register",
  logout: "auth/logout",
  authenticate: "auth/authenticate",
  revokeToken: "auth/customToken/revoke",
};