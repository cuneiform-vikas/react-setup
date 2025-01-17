const setupAxios = (axios: any, store: any) => {
  axios.interceptors.request.use(
    (config: any) => {
      const { auth } = store.getState();

      if (auth) {
        config.headers.Authorization = `Bearer ${auth.token}`;
        config.headers.AccessKey = process.env.ACCESS_KEY;
      }
      return config;
    },
    (err: any) => Promise.reject(err)
  );

  axios.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (err: any) => {
      if (err.response && err.response.status === 401) {
        // store.dispatch(defaultLogout());
        // window.location.href = "/";
      }
      return err.response;
    }
  );
};

export default setupAxios;
