export interface PostResult {
  data: Posts[];
  meta: Meta;
}

export interface Meta {
  page: number;
}

export interface Posts {
  idpost: number;
  title: string;
  text: string;
  tags: string;
  own: string;
  day: number;
  month: string;
}
