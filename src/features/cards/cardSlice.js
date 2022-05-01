import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {
            "9d07348c-3c35-4e3f-a372-85b41e6a9435": {
                "id": "9d07348c-3c35-4e3f-a372-85b41e6a9435",
                "front": "Which band is missing from this \"Big Four\" list - Metallica, Megadeth, Anthrax & __________? ",
                "back": "Slayer"
            },
            "cd577b5f-2c85-4360-bd3b-0ed3d8b0523e": {
                "id": "cd577b5f-2c85-4360-bd3b-0ed3d8b0523e",
                "front": "Who was Metallica's bassist on the album 'Ride the Lightning'?",
                "back": "Cliff Burton"
            },
            "e946cc49-c4ed-4b71-81d7-e4c6570dc9b0": {
                "id": "e946cc49-c4ed-4b71-81d7-e4c6570dc9b0",
                "front": "Who was Black Sabbath's original frontman?",
                "back": "Ozzy Osbourne"
            },
            "7ae38bf2-f6d6-4b58-9f23-39e3c3b74936": {
                "id": "7ae38bf2-f6d6-4b58-9f23-39e3c3b74936",
                "front": "How many members are in the band Slipknot",
                "back": "9"
            },
            "32204c7c-939a-41ad-ae87-4263cd2aac95": {
                "id": "32204c7c-939a-41ad-ae87-4263cd2aac95",
                "front": "Which band released the album 'Vulgar Display of Power' in 1992?",
                "back": "Pantera"
            }
        }
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