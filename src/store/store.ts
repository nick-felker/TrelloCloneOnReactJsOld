import { configureStore } from "@reduxjs/toolkit"
import { configure } from "@testing-library/react"
import { createStore } from "redux"
const ConfigureStore = [
    {RowName: 'ToDo'},
        {Cards: {
        CardName: 'fsdfs',
        CardDescription: 'fsdfs',
        CardComments: ['dafs', 'ffsfs', 'fsdfsfs'],
        }
    },
    {RowName: 'In Progress'},
        {Cards: {
        CardName: 'fsdfs',
        CardDescription: 'fsdfs',
        CardComments: ['dafs', 'ffsfs', 'fsdfsfs'],
        }
    },
    {RowName: 'Testing'},
        {Cards: {
        CardName: 'fsdfs',
        CardDescription: 'fsdfs',
        CardComments: ['dafs', 'ffsfs', 'fsdfsfs'],
        }
    },
    {RowName: 'Done'},
        {Cards: {
        CardName: 'fsdfs',
        CardDescription: 'fsdfs',
        CardComments: ['dafs', 'ffsfs', 'fsdfsfs'],
        }
    },
]


export default configureStore