const initialState = {
  activities: [],
  response: '',
  error: '',
  activity: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ACTIVITIES': {
      return {
        ...state, activities: action.payload,
      }
    }
    case 'NEW_ACTIVITY': {
      return {
        ...state, activities: [...state.activities, action.payload]
      }
    }
    case 'POST_ACTIVITY': {
      return {
        ...state, response: action.payload,
      }
    }
    case 'ERROR_ACTIVITY': {
      return {
        ...state, error: action.payload,
      }
    }
    case 'GET_ACTIVITY': {
      return {
        ...state, activity: action.payload.data,
      }
    }
    case 'DELETE_ACTIVITY': {
      return {
        ...state,
      }
    }

    default: {
      return state;
    }
  }
}