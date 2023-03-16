import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { systemDefault, dark, light } from '../../app/redux/darkTheme'

export const ThemeToggler = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state)=>state.Theme.theme)
  const [toggler, setToggler] = useState(false)

  const toggleTheme = () =>{
    setToggler(!toggler)
  }
  const handleClick = (e) =>{
    setToggler(false)
      if (e.target.name === 'dark') {
        dispatch(dark())
      } else if (e.target.name === 'light') {
        dispatch(light())
      } else {
        dispatch(systemDefault())
      }
  }

  return (
    <button
      onClick={toggleTheme}><br/>
        <svg xmlns="http://www.w3.org/2000/svg" className={`text-slate-600 ${theme === 'dark'? "": 'hidden'}`} width="25" height="25" viewBox="0 0 24 24" ><g fill="currentColor" fillOpacity="0"><path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"><animate id="lineMdMoonRisingTwotoneLoop0" fill="freeze" attributeName="fill-opacity" begin="0.7s;lineMdMoonRisingTwotoneLoop0.begin+6s" dur="0.4s" values="0;1"></animate><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingTwotoneLoop0.begin+2.2s" dur="0.4s" values="1;0"></animate></path><path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingTwotoneLoop0.begin+3s" dur="0.4s" values="0;1"></animate><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingTwotoneLoop0.begin+5.2s" dur="0.4s" values="1;0"></animate></path><path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingTwotoneLoop0.begin+0.4s" dur="0.4s" values="0;1"></animate><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingTwotoneLoop0.begin+2.8s" dur="0.4s" values="1;0"></animate></path><path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingTwotoneLoop0.begin+3.4s" dur="0.4s" values="0;1"></animate><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingTwotoneLoop0.begin+5.6s" dur="0.4s" values="1;0"></animate></path></g><path fill="currentColor" fillOpacity=".3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" transform="translate(0 22)"><animateMotion fill="freeze" calcMode="linear" dur="0.6s" path="M0 0v-22"></animateMotion></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className={`text-yellow-200 ${theme === 'light'? "": 'hidden'}`} width="25" height="25" viewBox="0 0 512 512"><path d="M256 387c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4v-46.2c0-8.5-6.9-15.4-15.4-15.4z" fill="currentColor"/><path d="M256 48c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4V63.4c0-8.5-6.9-15.4-15.4-15.4z" fill="currentColor"/><path d="M125 256c0-8.5-6.9-15.4-15.4-15.4H63.4c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4z" fill="currentColor"/><path d="M448.6 240.6h-46.2c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4s-6.9-15.4-15.4-15.4z" fill="currentColor"/><path d="M152.5 344.1c-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5l32.7-32.7c6-6 6-15.8 0-21.8-2.9-2.9-6.8-4.5-10.9-4.5z" fill="currentColor"/><path d="M359.5 167.9c4.1 0 8-1.6 10.9-4.5l32.7-32.7c2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5z" fill="currentColor"/><path d="M130.7 108.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-2.9 2.9-4.5 6.8-4.5 10.9 0 4.1 1.6 8 4.5 10.9l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7z" fill="currentColor"/><path d="M370.4 348.6c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-6 6-6 15.8 0 21.8l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7z" fill="currentColor"/><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96z" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className={`text-yellow-200 dark:text-slate-600 ${theme === 'systemDefault'? "": 'hidden'}`} width="25" height="25" viewBox="0 0 15 15"><path fill="currentColor" d="M10 12h3v-1h-3v1Z"/><path fill="currentColor" fill-rule="evenodd" d="M9.5 0A1.5 1.5 0 0 0 8 1.5V3H1.5A1.5 1.5 0 0 0 0 4.5v6A1.5 1.5 0 0 0 1.5 12H6v2H4v1h9.5a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 13.5 0h-4ZM8.085 14H7v-2h1v1.5c0 .175.03.344.085.5ZM9.5 14h4a.5.5 0 0 0 .5-.5V6H9v7.5a.5.5 0 0 0 .5.5ZM9 5h5V1.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V5Z" clip-rule="evenodd"/></svg>
      
      {toggler? <div className={`bg-red-600 flex absolute font-[600] rounded-md flex-col text-[0.7rem] p-[0.1rem] gap-[0.1rem] ${theme === 'systemDefault'? "bg-slate-200 text-slate-200 dark:bg-slate-800 dark:text-slate-600":""} ${theme === 'light'? "bg-slate-200 text-slate-200":""} ${theme === 'dark'? "bg-slate-800 text-slate-600":""}`}>
        <button className={`px-1 rounded ${theme === 'systemDefault'? "bg-slate-600 dark:bg-slate-200 ":""} ${theme === 'light'? "bg-slate-600":""} ${theme === 'dark'? "bg-slate-200":""}`} name="dark" onClick={(e)=>handleClick(e)}>
         dark
        </button>
        <button className={`px-1 rounded ${theme === 'systemDefault'? "bg-slate-600 dark:bg-slate-200 ":""} ${theme === 'light'? "bg-slate-600":""} ${theme === 'dark'? "bg-slate-200":""}`} name="light" onClick={(e)=>handleClick(e)}>
          light
        </button>
        <button className={`px-1 rounded ${theme === 'systemDefault'? "bg-slate-600 dark:bg-slate-200 ":""} ${theme === 'light'? "bg-slate-600":""} ${theme === 'dark'? "bg-slate-200":""}`} name='systemdefault' onClick={(e)=>handleClick(e)}>
          systemDefault
        </button>
      </div>: ""}
    </button>
  )
}

// template for all clasNames that have to work with the above theme
// className={`${theme === 'systemDefault'? "":""} ${theme === 'light'? "":""} ${theme === 'dark'? "":""}`}
