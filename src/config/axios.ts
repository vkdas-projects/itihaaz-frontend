import axios from "axios";
import { CardData } from "../types/articles";

const instance = axios.create({
  baseURL: "https://scary-skirt-jay.cyclic.cloud/api/",
  timeout: 1000,
});

export const getAllArticles = async () => {
  try {
    const res = await instance.get("/articles/all");
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getArticles = async () => {
  try {
    const res = await instance.get("/articles");
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getFeaturedArticles = async () => {
  try {
    const res = await instance.get("/articles/featured");
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getSingleArticle = async (id: string) => {
  try {
    const res = await instance.get(`/articles/${id}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const createArticle = async (data: CardData) => {
  try {
    const token = JSON.parse(localStorage.getItem("User")!).user;
    const res = await instance.post(`/articles`, data, {
      headers: { "x-access-token": token },
    });
    if (res) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const updateArticle = async (data: CardData) => {
  try {
    const token = JSON.parse(localStorage.getItem("User")!).user;
    const res = await instance.patch(`/articles/${data._id}`, data, {
      headers: { "x-access-token": token },
    });
    if (res) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const deleteArticle = async (id: string) => {
  try {
    const token = JSON.parse(localStorage.getItem("User")!).user;
    const res = await instance.delete(`/articles/${id}`, {
      headers: { "x-access-token": token },
    });
    if (res) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

// Subscription
export const createUserSubscription = async (email: string) => {
  try {
    const res = await instance.post(`/users/subscribe`, {
      email: email,
    });
    if (res) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

// Auth
export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await instance.post(`/users/admin/login`, data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
