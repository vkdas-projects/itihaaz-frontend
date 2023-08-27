import { create } from "zustand";

type selectedImageType = {
    data?: string | null ;
    selectedCardIndex: number;
    setSelectedImage: (imageUrl: string | undefined)=>void;
    setSelectedCardIndex: (index: number)=>void;
}

export const useSelectedCardStore = create<selectedImageType>((set) => ({
    data: null,
    selectedCardIndex: 0,
    setSelectedImage: (imageUrl: string| undefined) => {
        set(()=> ({ data:imageUrl }));
    },
    setSelectedCardIndex: (index: number) => {
        set(()=> ({selectedCardIndex : index }));
    }
  }));