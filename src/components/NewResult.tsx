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
  //let hasSubResults = props.subResults !=null;
  //let additionalContent;
  //if (hasSubResults){
  //  additionalContent += props.subResults.map(x => printSubResults(x))
  //}

  return (
    <div className="result">
      <a href={props.url}>
        <div>
          <p>{props.url}</p>
          <h3>{props.title}</h3>
        </div>
      </a>
      <p>{props.body}</p>

      {props.subResults?.map((x) => printSubResults(x))}
    </div>
  );
}
