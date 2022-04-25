import { createSlice } from '@reduxjs/toolkit'

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz : (state, { payload }) => {
            const { id, name, topicId, cardIds } = payload;
            state.quizzes[id] = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
        }
    }
})

export const selecteQuizzes = (state) => state.quizzes.quizzes

export const { addQuiz } = quizzesSlice.actions

export default quizzesSlice.reducer