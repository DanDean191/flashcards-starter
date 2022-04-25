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
        
    }
})

export const selecteTopics = (state) => state.topics.topics

export const { addTopic } = topicsSlice.actions

export default topicsSlice.reducer