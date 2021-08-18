import * as React from "react";
import { IAPI, IResult, ISubResult } from "./api-types";

function printSubResults(props: ISubResult) {
  return (
    <span className="sub_result">
      <a href={props.url}>{props.title}</a>
      <p>{props.body}</p>
    </span>
  );
}

export function NewResult(props: IResult) {
  
  return (
    <div className="result">
      <a href={props.url}>
        <div>
          <p>{props.url}</p>
          <h2>{props.title}</h2>
        </div>
      </a>
      <p>{props.body}</p>
      {props.subResults?.map((x) => printSubResults(x))}
    </div>
  );
}
