export type UserInformation = {
  email: string;
  password: string;
  passwordConfirm?: string; 
  nickname?: string;
};

// 로그인 검증 함수
function validateSigninUser(values: UserInformation) {
  const errors = {
    email: "",
    password: "",
  };

  if (!values.email) {
    errors.email = "이메일을 입력해주세요.";
  } else if (
    !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(values.email)
  ) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }

  if (!values.password) {
    errors.password = "비밀번호를 입력해주세요.";
  } else if (!(values.password.length >= 8 && values.password.length <= 20)) {
    errors.password = "비밀번호는 8~20자 사이로 입력해주세요.";
  }

  return errors;
}

// 회원가입 검증 함수
function validateSignUpUser(values: UserInformation) {
  const errors = {
    email: "",
    password: "",
    passwordConfirm: "", 
    nickname: "",
  };

  if (!values.email) {
    errors.email = "이메일을 입력해주세요.";
  } else if (
    !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
      values.email
    )
  ) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }

  if (!values.nickname) {
    errors.nickname = "닉네임을 입력해주세요.";
  } else if (values.nickname.length < 2) {
    errors.nickname = "닉네임은 2자 이상이어야 합니다.";
  } else if (values.nickname.length > 10) {
    errors.nickname = "닉네임은 10자 이하여야 합니다.";
  }

  if (!values.password) {
    errors.password = "비밀번호를 입력해주세요.";
  } else if (!(values.password.length >= 8 && values.password.length <= 20)) {
    errors.password = "비밀번호는 8~20자 사이로 입력해주세요.";
  } else if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(values.password)) {
    errors.password = "비밀번호는 영문자와 숫자를 포함해야 합니다.";
  }

  // 비밀번호 재확인 
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "비밀번호를 다시 입력해주세요.";
  } else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
  }

  return errors;
}

function validateSignin(values: UserInformation) {
  return validateSigninUser(values);
}

function validateSignup(values: UserInformation) {
  return validateSignUpUser(values);
}

export { validateSignin, validateSignup };