import { create } from "zustand";
import {
  getAllArticles,
  getArticles,
  getFeaturedArticles,
  getSingleArticle,
} from "../config/axios";
import { IArticleStore, IArticlesStore } from "../types/articles";


export const useGetAllArticles = create<IArticlesStore>((set) => ({
  data: null,
  isLoading: false,
  error: null,
  fetchAllArticles: async () => {
    try {
      set({ isLoading: true });
      const data = await getAllArticles();
      set({ isLoading: false, data: data });
    } catch (err: unknown) {
      console.log(err);
      set({ isLoading: false, error: err });
    }
  },
}));


export const useSnippetsStore = create<IArticlesStore>((set) => ({
  data: null,
  isLoading: false,
  error: null,
  fetchArticles: async () => {
    try {
      set({ isLoading: true });
      const data = await getArticles();
      set({ isLoading: false, data: data });
    } catch (err: unknown) {
      console.log(err);
      set({ isLoading: false, error: err });
    }
  },
}));

export const useFeaturedSnippetsStore = create<IArticlesStore>((set) => ({
  data: null,
  isLoading: false,
  error: null,
  fetchFeaturedArticles: async () => {
    try {
      set({ isLoading: true });
      const data = await getFeaturedArticles();
      set({ isLoading: false, data: data });
    } catch (err: unknown) {
      console.log(err);
      set({ isLoading: false, error: err });
    }
  },
}));

export const useSingleArticleStore = create<IArticleStore>((set) => ({
  data: null,
  isLoading: false,
  error: null,
  fetchSingleArticle: async (id: string) => {
    try {
      set({ isLoading: true });
      const data = await getSingleArticle(id);
      set({ isLoading: false, data: data });
    } catch (err: unknown) {
      console.log(err);
      set({ isLoading: false, error: err });
    }
  },
}));
