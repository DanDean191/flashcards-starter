import { createSlice } from '@reduxjs/toolkit'

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            "101f77c1-e60a-49e5-a7ef-68854ac469d2": {
                "id": "101f77c1-e60a-49e5-a7ef-68854ac469d2",
                "name": "Music",
                "icon": "https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/sun.svg",
                "quizIds": ["b85a7c04-b6e9-450d-9caf-8e822cd611ca"]
            },
        }
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