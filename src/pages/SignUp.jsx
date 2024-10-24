import AuthLayout from "../components/Layout/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";

const SignUpPage = () => {
  return (
    <>
    <AuthLayout type="sign up">
      <FormSignUp/>
    </AuthLayout>
</>
  ); 
};

export default SignUpPage;