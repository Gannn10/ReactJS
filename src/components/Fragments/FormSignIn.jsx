import Button from "../Element/Button/Index";
import CheckBox from "../Element/CheckBox/Index";
import LabeledInput from "../Element/LabeledInput";


const FormSignIn = () => {
  return (
        <div className="mt-16">
          <form action="">
            <div className="mb-6">
              <LabeledInput 
              label="Email address"
              type="email"
              placeholder="hello@example.com"
              name="email"
              />
            </div>
            <div className="mb-6">
             <LabeledInput 
              label="Password"
              type="password"
              placeholder="*************"
              name="password"
             />
            </div>
            <div className="mb-3">
              <CheckBox
              label="Keep me signed in" name="status"
              />
            </div>
            < Button 
            variant="bg-primary w-full text-white" type="submit"
            />
          </form>
        </div>
  );
};


export default FormSignIn;