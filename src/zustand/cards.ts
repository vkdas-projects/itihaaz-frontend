import { create } from "zustand";
import { CardData } from "../types/articles";
import {
  createArticle,
  deleteArticle,
  getSingleArticle,
  updateArticle,
} from "../config/axios";
import { useGetAllArticles } from "../zustand/articles";

export const useCreateSnippetStore = create<{
  isLoading?: boolean;
  isSuccess: boolean;
  cardData: CardData | null;
  createSnippet: (data: CardData) => unknown;
  getSnippet: (id: string) => void;
  updateSnippet: (data?: CardData) => void;
  deleteSnippet: (id: string) => void;
}>((set, get) => ({
  cardData: localStorage.getItem("CardData")
    ? JSON.parse(localStorage.getItem("CardData")!)
    : null,
  isSuccess: false,
  cardMediaData: [],
  createSnippet: async (data) => {
    set({ isSuccess: false });
    const response: CardData = await createArticle({
      ...data,
      color_theme: "theme_one",
      author: "Itihaaz",
      data: []
    });
    if (response !== null) {
      set({
        cardData: {
          _id: response._id,
          title: data.title,
          summary: data.summary,
          no_of_slides: data.no_of_slides,
          category: data.category,
          author: "itihaaz",
          color_theme: "theme_one",
          data: [],
        },
      });
    }
    set({ isSuccess: true });
    localStorage.setItem("CardData", JSON.stringify(data));
    return response._id;
  },

  getSnippet: async (id: string) => {
    const cardData = await getSingleArticle(id);
    if (cardData !== null) {
      set({
        cardData: cardData,
      });
    }
  },
  updateSnippet: async (data) => {
    set({ isLoading: true });
    const cardData = get().cardData;
    if (cardData !== null && data === undefined) {
      await updateArticle(cardData);
      console.log("init");
      
    }
    if(data){
      await updateArticle(data);
      console.log("Media");
      
    }
    set({ isLoading: false });
  },
  deleteSnippet: async (id: string) => {
    set({ isSuccess: false });
    const res = await deleteArticle(id);
    if (res !== null) {
      let filteredData = useGetAllArticles.getState().data;
      if (filteredData !== null) {
        filteredData = filteredData.filter((item: CardData) => item._id !== id);
      }
      useGetAllArticles.setState({
        data: filteredData,
      });
      set({ isSuccess: true });
    }
  },
}));
