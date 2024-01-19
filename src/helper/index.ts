import { lazy } from "react";

const Helper = {
  CustomLazyLoad: (path: string) => {
    return lazy(() => import(path));
  },
};

export default Helper;
