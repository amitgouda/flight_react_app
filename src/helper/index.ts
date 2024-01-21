import moment from "moment";
import { lazy } from "react";

const Helper = {
  CustomLazyLoad: (path: string) => {
    return lazy(() => import(path));
  },
  formattedDate: (param: string) => {
    return moment(param).format("dddd, Do MMMM YYYY - hh:mm A");
  },
};

export default Helper;
