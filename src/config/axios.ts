import axios from "axios";
import { CardData } from "../types/articles";
import { toast } from "react-hot-toast";

// localhost 
// const instance = axios.create({
//   baseURL: "http://192.168.29.19:3000/api/",
//   timeout: 1000,
// });

const instance = axios.create({
  baseURL: "https://scary-skirt-jay.cyclic.cloud/api/",
});

export const getAllArticles = async () => {
  try {
    const res = await instance.get("/articles/all");
    return res.data;
  } catch (err) {
    console.log(err);
    toast.error("Unable to get articles")
  }
};

export const getArticles = async () => {
  try {
    const res = await instance.get("/articles");
    return res.data;
  } catch (err) {
    console.log(err);
    toast.error("Unable to get articles")
  }
};

export const getFeaturedArticles = async () => {
  try {
    const res = await instance.get("/articles/featured");
    return res.data;
  } catch (err) {
    console.log(err);
    toast.error("Unable to get featured articles")
  }
};

export const getSingleArticle = async (id: string) => {
  try {
    const res = await instance.get(`/articles/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    toast.error("Unable to get singel article")
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
    console.log(err);
    toast.error("Unable to create article")
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
    console.log(err);
    toast.error("Unable to update")
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
    console.log(err);
    toast.error("Unable to delete")
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
    console.log(err);
    toast.error("Unable to create subscription")
  }
};

// Auth
export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await instance.post(`/users/admin/login`, data);
    return response.data;
  } catch (err) {
    console.log(err);
    toast.error("Unable to login")
  }
};
