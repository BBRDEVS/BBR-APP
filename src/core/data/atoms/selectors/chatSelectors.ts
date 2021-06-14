import { selector } from 'recoil';

import { chatState } from './index';

export const chatSelectorState = selector({
    key: 'chatSelectorState',
    get: ({ get }) => {
        const chat = get(chatState);

        return chat;
    }
})