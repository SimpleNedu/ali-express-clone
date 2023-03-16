import style from '../../../../styles/common/Nav1.module.css'
import { useState } from 'react'
import Image from 'next/image'

const Languagge = () => {
    const [toggle, settoggle] = useState(true)

  return (
    <div className={`${style.account} hover:bg-white ${toggle? "": "shadow-md"} w-fit`}>
         <div onClick={()=>settoggle((prev)=>!prev)} className={`flex hover:text-red-500 transition duration-75 items-center capitalize px-4 py-2 font-[100] text-[0.8rem]`}>
             {/* <Image src={`/`} alt={`flag`}/> */}
             img<p>/NGN/ENGLISH</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className={`opacity-60 ${toggle? "":"rotate-180"} transition duration-75`} viewBox="0 0 24 24"><path fill="currentColor" d="m12 15l-5-5h10Z"/></svg>

        </div>
         <div className={`capitalize hover:bg-white py-2 w-[12rem] font-[100] text-[0.8rem] absolute bg-white ${toggle? "hidden": " shadow-md"}`}> 
        {/*the theme feature when it is brougth in className={`${theme === 'systemDefault'? "":""} ${theme === 'light'? "":""} ${theme === 'dark'? "":""}`} */}
             <form >
                <label>
                    <p>ship to</p>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </label>
             </form>
         </div>
     </div>
  )
}

export default Languagge
// import { accountList } from "@/assets/navData"
// import Link from "next/link"

// const Account = () => {

//     const navlist = accountList.map((item)=>{
//         console.log(item.name)
//         return(<Link key={item.name} href={item.href} >
//                 <li className={`hover:bg-black/[0.05] transition duration-75 w-full p-1 px-2 bg-`}>{item.name}</li>
//             </Link>)
//     })

//   return (
//     <div className={`${style.account} hover:bg-white hover:shadow-md w-fit`}>
//         <div className={`flex hover:text-red-500 transition duration-75 items-center capitalize px-4 py-2 font-[100] gap-3 text-[0.8rem]`}>
//             <span className="flex">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5M11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6Z"/></svg> 
//                 account
//             </span>
//         </div>
//         <div className={`capitalize hover:bg-white py-2 w-[12rem] font-[100] text-[0.8rem] absolute ${style.accountBox}`}> 
// {/*the theme feature when it is brougth in className={`${theme === 'systemDefault'? "":""} ${theme === 'light'? "":""} ${theme === 'dark'? "":""}`} */}
//             <div className={`px-2`}>
//                 <p className={`py-2`}>Welcome to AliExpress</p>
//                 <div className="flex  font-[600] gap-1 justify-between">
//                     <button className={`py-[0.3] bg-red-600 text-white w-full`}>Register</button>
//                     <button className={`py-[0.3] bg-red-100 w-full text-red`}>SignIn</button>
//                 </div>
//                 <hr className="my-1"/>
//             </div>
//             <ul className="flex flex-col gap-[0.2rem]">
//                 {navlist}
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Account