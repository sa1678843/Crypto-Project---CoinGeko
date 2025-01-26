import { create } from "zustand";

const useStore = create((set) => ({
  currency: 'usd', // Changed to camelCase
  setCurrency: (newCurrency) =>
    set((state) => ({
      ...state,
      currency: newCurrency,
    })),
}));

export default useStore;
