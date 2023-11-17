import {defineStore} from "pinia";

interface IImgUrl {
  imgUrl: string | null;
}

export const useStore = defineStore("pokeImg", {
  state: (): IImgUrl => {
    return {
      imgUrl: "",
    };
  },
  actions: {
    addUrl(url: string) {
      this.imgUrl = url;
    },
  },
});
