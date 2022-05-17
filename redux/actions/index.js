export const userLogin = (user) => {
  // console.warn("data received in action", user);
  return {
    type: "USER_LOGIN",
    payload: user,
  };
};

export const teacherLogin = (teacher) => {
  return {
    type: "TEACHER_LOGIN",
    payload: teacher,
  };
};
export const selectOptions = (options) => {
  return {
    type: "SELECT_OPTIONS",
    payload: options,
  };
};

export const editQuestion = (question) => {
  return {
    type: "EDIT_QUESTION",
    payload: question,
  };
};
export const deleteQuestion = (question) => {
  return {
    type: "DELETE_QUESTION",
    payload: question,
  };
};
export const setQuestions = (questions) => {
  return {
    type: "SET_QUESTIONS",
    payload: questions,
  };
};

export const setQBank = (qbank_array) => {
  return {
    type: "SET_QBANK",
    payload: qbank_array,
  };
};
export const updateQBank = (editedQuestion) => {
  return {
    type: "UPDATE_QBANK",
    payload: editedQuestion,
  };
};
export const add2QBank = (newQuestion) => {
  return {
    type: "ADD2_QBANK",
    payload: newQuestion,
  };
};
export const setTotalQuestions = (length) => {
  return {
    type: "SET_TOTAL_QUESTIONS",
    payload: length,
  };
};
