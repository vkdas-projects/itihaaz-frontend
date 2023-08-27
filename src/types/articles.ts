

export type IArticlesStore = {
  data: Array<CardData> | null;
  isLoading: boolean;
  error?: null | unknown;
  fetchArticles?: () => void;
  fetchAllArticles?: () => void;
  fetchFeaturedArticles?: () => void;
};

export type IArticleStore = {
  data: CardData | null;
  isLoading: boolean;
  error?: null | unknown;
  fetchSingleArticle: (id: string) => void;
};

export type CardData = {
  _id?: string;
  title: string;
  summary: string;
  author: string;
  color_theme: string;
  category: string;
  no_of_slides?:  number;
  data: Array<CardDataMedia>;
  is_featured?: boolean;
};

export type CardDataMedia = {
  id?: string;
  heading: string;
  description: string;
  image_url?: string;
  media_dimensions: {
    height: number;
  },
  index?: number;
};
