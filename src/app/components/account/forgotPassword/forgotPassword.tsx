const ForgotPassword = ({func}:{func:Function}) => {

    const backToLogin = ()=>{
        func(false)
    }

    return ( 
        <div>
            <p className="text-2xl">Forgot your password?</p>
            <p className="text-lightLight mt-2 mb-5">Enter the email you used to sign up and we&apos;ll send you a password reset email.</p>
            <div>
                <label className="text-lightLight" htmlFor="Email">Email</label>
                <input className="h-12 w-full border bg-transparent focus:outline-none px-3" type="Email" name="Email" id="Email" />
            </div>
            <div className="mt-8">
                <button className="w-full h-12 bg-foreground text-background rounded-3xl">Reset password</button>
                <div className="text-center my-4">
                    <button onClick={backToLogin} className="text-foreground">Back to login</button>
                </div>
            </div>
        </div>
    );
}
 
export default ForgotPassword;