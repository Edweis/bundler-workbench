import { StatusCodes } from "http-status-codes";
import { depA, depABis } from "./dep-a";
export const handler = () => {
  const x = "hello";
  const y = "ciao";
  if (StatusCodes.OK) console.log("They are equal!");
  if (true) console.log("This should alwasy show");
  if (false) console.log("This should never show");
  if (false) console.log(depABis("hello you"));
  if (process.env.NODE_ENV === 'production') console.log('should only show in PROD');
  console.log(process.env.NODE_ENV);
};
