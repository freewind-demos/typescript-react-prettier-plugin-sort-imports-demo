import "./hello.pcss";
import { toUpper } from "./util";
import React, { FC } from "react";
import { toLower } from "lodash";
import path from "path";

export const Hello: FC = () => {
  console.log(path.sep);
  return <div>{toUpper(toLower("Hello"))}</div>;
};
