import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { Button, Alert, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FeatherIcons from "feather-icons-react";

//actions
import { resetAuth, signupUser } from "../../redux/actions";

import { RootState, AppDispatch } from "../../redux/store";

// components
import { VerticalForm, FormInput } from "../../components/";

import AuthLayout from "./AuthLayout";
import { SignUp } from "../actions/authentication";

// images
// import logoDark from "../../assets/images/logo-dark.png";
// import logoLight from "../../assets/images/logo-light.png";

// interface UserData {
//   name: string;
//   email: string;
//   password: string;
//   // checkboxsignup: boolean;
// }

/* bottom links */
const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col xs={12} className="text-center">
        <p className="text-muted">
          {t("Company already registered?")}{" "}
          <Link to={"/auth/login"} className="text-primary fw-bold ms-1">
            {t("Login")}
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const Register = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  //from authentication.js
  const { signup, companyData, loading: signUpLoading, changeHandler} = SignUp();

  const { loading, userSignUp, error } = useSelector((state: RootState) => ({
    loading: state.Auth.loading,
    error: state.Auth.error,
    userSignUp: state.Auth.userSignUp,
  }));

  useEffect(() => {
    dispatch(resetAuth());
  }, [dispatch]);

  /*
   * form validation schema
   */
  // const schemaResolver = yupResolver(
  //   yup.object().shape({
  //     name: yup.string().required(t("Please enter Name")),
  //     email: yup
  //       .string()
  //       .required("Please enter Email")
  //       .email("Please enter valid Email"),
  //     password: yup.string().required(t("Please enter Password")),
  //     checkboxsignup: yup.bool().oneOf([true]),
  //   })
  // );

  /*
   * handle form submission
   */
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup();
  };

  return (
    <>
      {userSignUp ? <Navigate to={"/auth/confirm"}></Navigate> : null}

      <AuthLayout bottomLinks={<BottomLink />}>
        <div className="auth-logo mx-auto">
          <Link to="/" className="logo logo-dark text-center">
            <span className="logo-lg">
              <h3>Staff Management System</h3>
            </span>
          </Link>
        </div>

        <h6 className="h5 mb-0 mt-3">{t("Create your account")}</h6>
        <p className="text-muted mt-1 mb-4">
          {t("Create a free account and start using SMS")}
        </p>

        {error && (
          <Alert variant="danger" className="my-2">
            {error}
          </Alert>
        )}

        <form onSubmit={onSubmit}>
          <FormInput
            label={t("Company Name")}
            type="text"
            name="name"
            value={companyData.name}
            onChange={changeHandler}
            startIcon={<FeatherIcons icon={"user"} className="icon-dual" />}
            placeholder={t("Your company name")}
            containerClass={"mb-3"}
          />
          <FormInput
            label={t("Email Address")}
            type="email"
            name="email"
            value={companyData.email}
            onChange={changeHandler}
            startIcon={<FeatherIcons icon={"mail"} className="icon-dual" />}
            placeholder={t("hello@coderthemes.com")}
            containerClass={"mb-3"}
          />
          <FormInput
            label={t("Password")}
            type="password"
            name="password"
            value={companyData.password}
            onChange={changeHandler}
            startIcon={<FeatherIcons icon={"lock"} className="icon-dual" />}
            placeholder={t("Enter your Password")}
            containerClass={"mb-3"}
          />
          <FormInput
            label={t("I accept Terms and Conditions")}
            type="checkbox"
            name="checkboxsignup"
            containerClass={"mb-3"}
            defaultChecked
          />

          <div className="mb-3 text-center d-grid">
            <Button type="submit" > 
            {/* disabled={loading} */}
              {signUpLoading  ? "loading... ":  "SignUp"}
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};

export default Register;
