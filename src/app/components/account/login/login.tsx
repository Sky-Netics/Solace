import { useRef, useState,useEffect } from "react";
import ForgotPassword from "../forgotPassword/forgotPassword";

const Login = () => {
    const [show,setShow] = useState(false);
    const [forgot,setForgot] = useState(false);
    const passwordInput = useRef<HTMLInputElement|null>(null);

    useEffect(() => { 
        if (passwordInput.current)
            passwordInput.current.type = show ? "text" : "password"; 
        }
    ,[show]);
    
    const togglePassword = () => { 
        setShow(prevShow => !prevShow); 
    }

    const forgotClicked = ()=>{
        setForgot(true)
    }

    return (
        forgot ? <ForgotPassword func={setForgot}/>
        :
        <div>
            <p className="text-2xl my-5">Log in</p>
            <div className="space-y-4">
                <div>
                    <label className="text-lightLight" htmlFor="Email">Email</label>
                    <input className="h-12 w-full border focus:outline-none px-3 bg-transparent" type="email" name="Email" id="Email" />
                </div>
                <div>
                    <label className="text-lightLight" htmlFor="Password">Password</label>
                    <div className="h-12 w-full flex border items-center px-3">
                        <input ref={passwordInput} className="w-full focus:outline-none bg-background" type="password" name="Password" id="Password" />
                        {show ?
                        <svg onClick={togglePassword} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.4998 4.79224C8.84942 4.79224 7.23623 5.28227 5.86471 6.20021C4.49727 7.11542 3.43147 8.41491 2.80151 9.93475C2.78752 9.97716 2.78752 10.023 2.80151 10.0654C3.43147 11.5852 4.49727 12.8847 5.86471 13.7999C7.23623 14.7178 8.84942 15.2079 10.4998 15.2079C12.1501 15.2079 13.7633 14.7178 15.1348 13.7999C16.5023 12.8847 17.5681 11.5852 18.198 10.0654C18.212 10.023 18.212 9.97716 18.198 9.93474C17.5681 8.4149 16.5023 7.11542 15.1348 6.20021C13.7633 5.28227 12.1501 4.79224 10.4998 4.79224ZM5.16945 5.1614C6.74669 4.10577 8.60186 3.54224 10.4998 3.54224C12.3977 3.54224 14.2528 4.10577 15.8301 5.1614C17.4073 6.21703 18.6356 7.71722 19.3592 9.47176C19.3621 9.47865 19.3648 9.48558 19.3674 9.49256C19.4889 9.81997 19.4889 10.1801 19.3674 10.5076C19.3648 10.5145 19.3621 10.5215 19.3592 10.5283C18.6356 12.2829 17.4073 13.7831 15.8301 14.8387C14.2528 15.8943 12.3977 16.4579 10.4998 16.4579C8.60186 16.4579 6.74669 15.8943 5.16945 14.8387C3.59221 13.7831 2.36392 12.2829 1.64031 10.5283C1.63747 10.5215 1.63476 10.5145 1.63217 10.5076C1.51063 10.1801 1.51063 9.81997 1.63217 9.49256C1.63476 9.48558 1.63747 9.47865 1.64031 9.47176C2.36392 7.71722 3.59221 6.21703 5.16945 5.1614Z" fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.4998 8.12506C9.46424 8.12506 8.62477 8.96452 8.62477 10.0001C8.62477 11.0356 9.46424 11.8751 10.4998 11.8751C11.5353 11.8751 12.3748 11.0356 12.3748 10.0001C12.3748 8.96452 11.5353 8.12506 10.4998 8.12506ZM7.37477 10.0001C7.37477 8.27417 8.77388 6.87506 10.4998 6.87506C12.2257 6.87506 13.6248 8.27417 13.6248 10.0001C13.6248 11.7259 12.2257 13.1251 10.4998 13.1251C8.77388 13.1251 7.37477 11.7259 7.37477 10.0001Z" fill="currentColor"></path>
                        </svg>                    
                        :
                        <svg onClick={togglePassword} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.74286 7.29565C2.13198 7.15366 2.56252 7.35399 2.70452 7.7431C3.3748 9.57996 4.57365 11.1754 6.14769 12.3299C6.16094 12.339 6.17398 12.3485 6.1868 12.3585C6.23347 12.3924 6.28047 12.4259 6.32779 12.459C7.99053 13.6222 9.97071 14.2461 12 14.2461C14.0292 14.2461 16.0094 13.6222 17.6721 12.459C17.7195 12.4259 17.7665 12.3924 17.8131 12.3585C17.8259 12.3485 17.839 12.339 17.8522 12.3299C19.4263 11.1755 20.6251 9.57996 21.2954 7.7431C21.4374 7.35399 21.8679 7.15366 22.2571 7.29565C22.6462 7.43764 22.8465 7.86819 22.7045 8.2573C22.0214 10.1293 20.8616 11.7836 19.3475 13.0608L20.5737 14.5172C20.8405 14.834 20.7999 15.3071 20.483 15.5739C20.1661 15.8407 19.693 15.8001 19.4262 15.4833L18.1371 13.9522C17.213 14.543 16.2124 14.9946 15.1677 15.2969L15.7321 17.8376C15.8219 18.2419 15.567 18.6425 15.1626 18.7324C14.7583 18.8222 14.3576 18.5672 14.2678 18.1629L13.7025 15.6182C13.1414 15.703 12.5724 15.7461 12 15.7461C11.4275 15.7461 10.8585 15.703 10.2974 15.6182L9.73211 18.1629C9.64228 18.5672 9.24167 18.8222 8.83731 18.7324C8.43295 18.6425 8.17798 18.2419 8.26781 17.8376L8.83222 15.2969C7.78752 14.9946 6.78696 14.543 5.86277 13.9522L4.57369 15.4833C4.30691 15.8001 3.83377 15.8407 3.51691 15.5739C3.20005 15.3071 3.15945 14.834 3.42623 14.5172L4.65239 13.0608C3.13831 11.7836 1.97851 10.1293 1.2954 8.2573C1.15341 7.86819 1.35374 7.43764 1.74286 7.29565Z" fill="currentColor"></path>
                        </svg>
                        }
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <button className="w-full h-12 bg-foreground text-background rounded-3xl">Continue with email</button>
                <div className="text-center my-4">
                    <button onClick={forgotClicked} className="text-foreground">Forgot password</button>
                </div>
            </div>
        </div>
     );
}
 
export default Login;