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
        quizzes: {
            "b85a7c04-b6e9-450d-9caf-8e822cd611ca": {
                "id": "b85a7c04-b6e9-450d-9caf-8e822cd611ca",
                "name": "Metal Music",
                "topicId": "101f77c1-e60a-49e5-a7ef-68854ac469d2",
                "cardIds": [
                    "9d07348c-3c35-4e3f-a372-85b41e6a9435",
                    "cd577b5f-2c85-4360-bd3b-0ed3d8b0523e",
                    "e946cc49-c4ed-4b71-81d7-e4c6570dc9b0",
                    "7ae38bf2-f6d6-4b58-9f23-39e3c3b74936",
                    "32204c7c-939a-41ad-ae87-4263cd2aac95"
                ]
            }
        }
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