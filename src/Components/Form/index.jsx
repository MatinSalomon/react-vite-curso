import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"


const Form = () => {
    return (
            <form className="flex flex-col gap-4 w-80">
                <label className="flex flex-col gap-1">
                    Email:
                    <input 
                    type="email" 
                    name="email" 
                    className="rounded-lg border min-h-[42px] border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    />
                </label>
                <label className="flex flex-col gap-1">
                    Password:
                    <input 
                    type="password" 
                    name="password" 
                    className="rounded-lg border min-h-[42px] border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    />
                </label>
                <button type="submit" className="bg-black text-white text-lg w-full rounded-lg p-3 mb-4">Sign In</button>
            </form>
    )
}

export default Form