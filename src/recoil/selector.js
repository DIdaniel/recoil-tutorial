import { selector } from "recoil";

import { textState as testAtom } from "./atoms";

export const counterState = selector({
  key: "characterCountState",
  get: ({ get }) => {
    const text = get(testAtom);
    return text.length;
  },
});
