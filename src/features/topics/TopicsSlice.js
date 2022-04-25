import { createSlice } from '@reduxjs/toolkit'

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, { payload }) => {
            const { id, name, icon } = payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        },
        addQuizId: (state, { payload }) => {
            const { quizId, topicId } = payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
})

export const selectTopics = (state) => state.topics.topics

export const { addTopic, addQuizId } = topicsSlice.actions

export default topicsSlice.reducer