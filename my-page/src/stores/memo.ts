import { create } from "zustand";

interface MemoStore {
    memo: string;
    setMemo: (text: string) => void;
    memos: string[];
    setMemos: (newMemo: string) => void;
}

/*
memo , memos 에 초기값을 넣어요.
setMemo 는 매개변수를 지정하고 어디에 어떻게 값을 넣을지 정합니다.
*/
const useMemoStore = create<MemoStore>((set) => ({
    memo: '',
    setMemo: (text: string) => set({ memo: text }),
    memos: [],
    setMemos: (newMemo: string) =>  
        set((prev) => ({
            memos: [...prev.memos, newMemo],
        })),
}));

export default useMemoStore