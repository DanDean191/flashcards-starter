import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard : (state, { payload }) => {
            const { id, front, back } = payload;
            state.cards[id] = {
                id: id,
                front: front,
                back: back,
            }
        }
    }
})

export const selectCards = (state) => state.cards.cards

export const { addCard } = cardSlice.actions

export default cardSlice.reducer