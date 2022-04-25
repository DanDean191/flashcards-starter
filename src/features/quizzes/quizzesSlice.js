import { createSlice } from '@reduxjs/toolkit'
import { addQuizId } from '../topics/topicsSlice';

export const addQuizForTopicId = (quiz) => {
    const { id, topicId } = quiz;
    return (dispatch) => {
        dispatch(addQuiz(quiz))
        dispatch(addQuizId({
             quizId: id,
             topicId: topicId,
        }))
    }
}

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

export const selectQuizzes = (state) => state.quizzes.quizzes

export const { addQuiz } = quizzesSlice.actions

export default quizzesSlice.reducer