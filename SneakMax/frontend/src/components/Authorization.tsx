import CustomButton from "./SubComponents/customButton"
import { FormEvent, useEffect, useState } from "react"
import { Sneaker } from "@/app/page"

interface IProps{
    onGetName: (name:string) => void
    onGetBasket: () => void
    onSetAuth: (flag:boolean) => void
    showAuth:boolean
    isAuth:boolean
}

const Authorization:React.FC<IProps> = ({onGetName,onGetBasket,showAuth,onSetAuth,isAuth}) => {
    const[enter, setEnter] = useState<boolean>(true)
    const[userNameInput, setUserNameInput] = useState<string>('')
    const[passwordInput, setPasswordInput] = useState<string>('')

    const handleChangeUserName = (event:React.ChangeEvent<HTMLInputElement>) => {setUserNameInput(event.target.value)}
    const handleChangePassword = (event:React.ChangeEvent<HTMLInputElement>) => {setPasswordInput(event.target.value)}

    const handleClickReg = () => {
        setEnter(false)
    }
    const handleClickEnter = () => {
        setEnter(true)
    }

    useEffect(() => {
      if (isAuth) {
        onGetName(userNameInput); // Установка userName после успешной авторизации
        onGetBasket();
      }
    }, [isAuth]);

    const Registration = async () => {
        const data = {
            userNameInput,
            passwordInput
        }
        try {
          const response = await fetch(`http://127.0.0.1:8000/Authorization/`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify(data), 
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          console.log("Успешный ответ:");
        } catch (error) {
          console.error("Ошибка при выполнении запроса:", error);
        }
      };
      const Login = async (event: FormEvent<HTMLFormElement>):Promise<void> => {
        event.preventDefault();
        try {
          const response = await fetch(`http://127.0.0.1:8000/Authorization/?name=${userNameInput}&password=${passwordInput}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          onGetName(userNameInput)
          onSetAuth(true)
        } catch (err) {
          console.error(err);
        } finally{

        }
      };

    return(
        <form onSubmit={enter ? Login : Registration} className={`fixed z-[500] w-[400px] h-[400px] top-[200px] left-[600px] bg-custom_purple p-[20px] transition-all duration-[1s] ${showAuth ? 'opacity-100 scale-100' : 'z-[-100] opacity-0 scale-80'}`}>
            <div className="flex flex-col gap-[25px] justify-center items-center">
                <div className="flex gap-[40px] justify-center">
                    <div onClick={handleClickReg} className="relative hover:cursor-pointer">
                        <div>Регистрация</div>
                        <div className={`absolute top-[25px] left-0 w-full h-[2px] bg-white rounded-[2px] transition-all duration-[1s] ${enter ? 'opacity-0 pointer-events-none scale-0' : 'opacity-100 pointer-events-auto scale-100'}`}></div>
                    </div>
                    <div onClick={handleClickEnter} className="relative hover:cursor-pointer">
                        <div>Вход</div>
                        <div className={`absolute top-[25px] left-0 w-full h-[2px] bg-white rounded-[2px] transition-all duration-[1s] ${enter ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-0'}`}></div>

                    </div>
                </div>
                <div className="flex flex-col w-full gap-[5px]">
                    <div>Имя пользователя</div>
                    <input  required value={userNameInput} onChange={handleChangeUserName} className='h-[60px] rounded-[3px] px-[20px]' placeholder="Имя пользователя"></input>
                </div>
                <div className="flex flex-col w-full gap-[5px]">
                    <div>Пароль</div>
                    <input  required value={passwordInput} onChange={handleChangePassword} className='h-[60px] rounded-[3px] px-[20px]' placeholder="Пароль"></input>
                </div>
                <CustomButton
                    type="submit"
                    width={338}
                    height={60}
                    textColor="white"
                    backgroundColor="rgba(241, 79, 79, 1)"
                    fontSize={16}
                    >Отправить
                </CustomButton>
            </div>
        </form>
    )
}

export default Authorization