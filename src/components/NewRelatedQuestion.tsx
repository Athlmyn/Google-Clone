import * as React from "react";
import { ICommonQuestion } from "./api-types";

export interface ICommonQuestions{
    questions: ICommonQuestion[]
}

export function NewRelatedQuestion(props: ICommonQuestions) {
  return (
    <div>
      <h2>People also ask</h2>
      <hr />
      {props.questions.map((x) => (
        <div>
          <h3>
            {x.body}
            <hr></hr>
          </h3>
        </div>
      ))}
    </div>
  );
}
