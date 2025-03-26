import { auth } from "../firebase";

export const Account = ()=>{
    const user = auth.currentUser
    return(
        <div className=" w-full  flex gap-2 justify-center pt-20 ">
                <h1 className="font-semibold font-primary tracking-tight text-black text-2xl">Your Account :</h1>
                <h1 className="font-semibold font-primary tracking-tight text-black text-2xl">{user ? user.email : "user" }</h1>

        </div>

        
    )
}