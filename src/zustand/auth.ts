import { create } from "zustand";
import { Auth } from "../types/auth";
import { login } from "../config/axios";

export const useAuthStore = create<Auth>((set) => ({
  data: localStorage.getItem("User") ? JSON.parse(localStorage.getItem("User")!) :  null,
  isLoading: false,
  error: null,
  login: async (data: { email: string; password: string }) => {
    try {
        set({ isLoading: true });
      const response: {
        user : string
      } = await login(data);
      if(response.user !== null){
        localStorage.setItem("User", JSON.stringify(response))
        set({ isLoading: false, data: response });
      }
      else{
        throw "Wrong credentials"
      }
    } catch (err: unknown) {
      console.log(err);
      set({ isLoading: false, error: err });
    }
  },
}));
