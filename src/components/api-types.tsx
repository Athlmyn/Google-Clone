// Generated by https://quicktype.io

export interface API {
    id:              string;
    performance:     string;
    resultCount:     number;
    commonQuestions: ICommonQuestion[];
    results:         IResult[];
}

export interface ICommonQuestion {
    body: string;
}

export interface IResult {
    url:                  string;
    type:                 string;
    title:                string;
    body:                 string;
    visitCount?:          string;
    subResults?:          ISubResult[];
    imageUrlList?:        string[];
    subTitle?:            string;
    stableRelease?:       string;
    initialRelease?:      string;
    "developer(s)"?:      string;
    "originalAuthor(s)"?: string;
    writtenIn?:           string;
    platform?:            string;
}

export interface ISubResult {
    title: string;
    body:  string;
    url:   string;
}
