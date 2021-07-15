import * as React from "react";
import { IAPI, ICommonQuestion, IResult, ISubResult } from "./api-types";
import { SearchHead } from "./SearchHead";
import "./Search.css";

//import RelatedQuestions from "./RelatedQuestions";
//import Result from "./Result";

export interface IAppProps {}

export interface IAppState {
  results: IAPI;
  hasLoaded: boolean;
}

export default class NewSearch extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      results: {} as IAPI,
      hasLoaded: false,
    };
  }
  //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
  componentDidMount() {
    this.populateResults();
  }

  async populateResults() {
    const response = await fetch(
      "https://ushop-gcp.uc.r.appspot.com/api/search/react"
    );
    const data = (await response.json()) as IAPI;

    // Sleeps for 2 seconds then continue to simulate loading the page
    await new Promise((r) => setTimeout(r, 2000));
    this.setState({ results: data, hasLoaded: true });
  }

  loadContent() {
      if (this.state.hasLoaded === false){
          return <h1>Content is still loading</h1>
      }
      return (
          <div>
              <p>{`About ${this.state.results.resultCount} results (${this.state.results.performance}) `}</p>

              
          </div>
      );

  }

  public render() {
    let contents = this.loadContent();

    return (
      //This can be a separate new component
      <div className="main_container">
        <SearchHead />

        <div className="body_left">
            {contents}
        </div>

        {/* This can be a separate new component ---------------------------------------------------------------------- */}
        <div className="body_right">right</div>
        {/* ---------------------------------------------------------------------- */}
      </div>
    );
  }
}
