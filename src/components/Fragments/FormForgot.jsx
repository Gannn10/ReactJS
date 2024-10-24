import Button1 from "../Element/Button/Index1";
import LabeledInput from "../Element/LabeledInput";



const FormForgot = () => {
  return (
                <div className="mt-16">
                <form action="">
                <div className="mb-6">
                <LabeledInput
                label="Email address"
                type="email"
                placeholder="hello@example.com"
                name="name"
                />
            </div>
        
            <div className="mb-3">
            
            </div>
            < Button1
            variant="bg-primary w-full text-white" type="submit"
            />
          </form>
        </div>
  );
};


export default FormForgot;