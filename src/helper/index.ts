import moment from "moment";

const Helper = {
  // CustomLazyLoad: (path: string) => {
  //   return React.lazy(() => import(path));
  // },
  formattedDate: (param: string) => {
    return param ? moment(param).format("dddd, Do MMMM YYYY - hh:mm A") : "";
  },
  isObject: (param: any) => {
    return typeof param === "object" && !Array.isArray(param) && param !== null;
  },
};

export default Helper;
