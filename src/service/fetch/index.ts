import { API_PATH } from "../../constants";

const FetchService = {
  get: (
    path: string,
    successHandler: ((value: any) => void) | null | undefined,
    faultFandler: ((reason: any) => void) | null | undefined
  ) => {
    fetch(`${API_PATH}${path}`)
      .then((res) => res.json())
      .then(successHandler)
      .catch(faultFandler);
  },
};

export default FetchService;
