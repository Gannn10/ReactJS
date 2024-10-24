const Button1 = (props) => {
    const { children, variant, type } = props;
    return (
      <button
                className={`h-12 rounded-md text-sm ${variant}`}
                type={type}>
                  {children}
                Password Reset
              </button>
    );
  };
  
  export default Button1;