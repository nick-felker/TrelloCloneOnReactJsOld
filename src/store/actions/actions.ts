

export const addNewCard = (cardName:string) =>({
    type: 'ADD_NEW_CARD',
    cardName,
})
export const addNewColunm = (columnName:string) =>({
    type: 'ADD_NEW_COLUMN',
    columnName,
})
export const addNewComment = (commentName:string) =>({
    type: 'ADD_NEW_COMMENT',
    commentName,
})
export const setDescription = (descriptionName:string) =>({
    type: 'SET_DESCRIPTION',
    descriptionName,
})
export const renameColumn = (newColumnName:string) =>({
    type: 'RENAME_COLUMN',
    newColumnName,
})
export const renameCard = (newCardName:string) =>({
    type: 'RENAME_CARD',
    newCardName,
})
export const deleteColumn = (deleteColumnName:string) =>({
    type: 'DELETE_COLUMN',
    deleteColumnName,
})
export const deleteCard = (deleteCardName:string) =>({
    type: 'DELETE_CARD',
    deleteCardName,
})
export const deleteComment = (deleteCommentName:string) =>({
    type: 'DELETE_COMMENT',
    deleteCommentName,
})