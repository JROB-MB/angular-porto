export interface CommentsResult {
  data: Comments[];
 
}

export interface Meta {
  page: number;
}

export interface Comments {
  idcomments: number;
  titleComment: string;
  textComment: string;
  ownComment: string;
  id: number;
}