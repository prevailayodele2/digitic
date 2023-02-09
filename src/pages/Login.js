import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import { useDispatch, useSelector } from "react-redux";

// let schema = yup.object().shape({
//   email: yup
//     .string()
//     .email("Email should be valid")
//     .required("Email is Required"),
//   password: yup.string().required("Password is Required"),
// });

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: schema,
//     onSubmit: (values) => {
//       dispatch(login(values));
//     },
//   });
//   const authState = useSelector((state) => state);

//   const { user, isError, isSuccess, isLoading, message } = authState.auth;

//   useEffect(() => {
//     if (isSuccess) {
//       navigate("admin");
//     } else {
//       navigate("");
//     }
//   }, [user, isError, isSuccess, isLoading]);

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
