const initialState = {
  user: {
    student_id: "",
    student_name: "",
    token: "",
    options: {
      subject: "",
      author: "",
      year: "",
    },
    progress: {
      total: "",
      answered: [],
      unanswered: [],
      marked: [],
      correct: [],
      incorrect: [],
    },
  },
  questions: [{}],
  teacher: {},
};
function studentReducer(state = initialState, action) {
  // console.log("action received in reducer", action);
  switch (action.type) {
    case "USER_LOGIN": {
      return {
        ...state,
        user: {
          ...state.user,
          student_id: action.payload.student_id,
          student_name: action.payload.student_name,
          token: action.payload.token,
        },
      };
    }
    case "TEACHER_LOGIN": {
      return {
        ...state,
        teacher: action.payload,
      };
    }
    case "USER_LOGOUT": {
    }
    case "SELECT_OPTIONS": {
      // console.log("options added");
      return {
        ...state,
        user: { ...state.user, options: action.payload },
      };
    }

    case "SET_QUESTIONS": {
      // console.log("questions added to state");
      return {
        ...state,
        questions: action.payload,
      };
    }

    case "SET_TOTAL_QUESTIONS": {
      return {
        ...state,
        user: {
          ...state.user,
          progress: { ...state.user.progress, total: action.payload },
        },
      };
    }
    default:
      return { ...state };
  }
}

export default studentReducer;
