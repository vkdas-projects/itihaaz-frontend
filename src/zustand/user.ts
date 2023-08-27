import { create } from "zustand";
import {
  createUserSubscription,
} from "../config/axios";
import { User } from "../types/user";

export const useUserStore = create<User>((set) => ({
  data: null,
  isLoading: false,
  error: null,
  createUserSubscriptionFunction: async (email : string) => {
    try {
    set({ data: null });
      set({ isLoading: true });
      const data = await createUserSubscription(email);
      set({ isLoading: false, data: data });
    } catch (err: unknown) {
      console.log(err);
      set({ isLoading: false, error: err });
    }
  },
}));