import Logo from "../Element/logo";
import {Link} from "react-router-dom"

const AuthLayout1 = (props) => {
  const {children, type} = props;
 return (
    <div className="flex justify-center min-h-screen items-center bg-special-mainBg">
      {/* container start */}
      <div className="w-full max-w-sm">
        {/* logo start */}
        <Logo/>
        {/* logo end */}
        {/* form start */}
        <div className="mt-16">
          {children}
        </div>
        {/* form end */}
        {/* teks start */}
        <div className="my-9 px-7 flex justify-center text-xs text-gray-03 items-center flex-col static">
          {type == "sing up" && (
            <div className="font-bold text-xl">Create an accont</div>
          )}
        
          <div className="border border-gray-05 w-full"></div>
         
        </div>
        {/* teks end */}
        {/* link start */}
        <div className="flex justify-center">
  {type == "sign up" ? (
    <>
      <span className="text-sm text-gray-03">
        Already have an account?&nbsp;
      </span>
    </>
  ) : (
    <>
    <div className="flex flex-col"> 
    <Link to="/login" className="text-sm font-bold">Back To Login</Link>
    </div>
    </>
  )}


</div>

        {/* link end */}
      </div>
      {/* container end */}
    </div>
  );
}
export default AuthLayout1;