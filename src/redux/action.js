
export const increaseCounterAction = () => {
    return {
        type: 'INCREASE_COUNT',
    };
}

export const decreaseCounterAction = () => {
    return {
        type: 'DECREASE_COUNT',
    };
}

// Click tag => Change Content List

export const filterContent = (tag_id) => {
    return {
        type: 'FILTER_CONTENT',
        tag_id: tag_id,
    }
}
 