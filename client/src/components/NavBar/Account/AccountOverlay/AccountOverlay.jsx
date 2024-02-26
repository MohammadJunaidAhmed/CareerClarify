import { useContext } from "react"
import AccountOverlayIcon from "./AccountOverlayIcon/AccountOverlayIcon"
import loginContext from "../../../Contexts/Login/LoginContext";


const AccountOverlay = () => {
  const {isLogin} = useContext(loginContext);
  return (
      <div className="flex flex-col cursor-pointer">
        {
          isLogin 
          ?
          <div className="flex flex-col cursor-pointer">
            <AccountOverlayIcon type={'myaccount'}/>
            <AccountOverlayIcon type={'help'}/>
            <AccountOverlayIcon type={'logout'}/>
          </div>
          :
          <div>
            <AccountOverlayIcon type={'login'}/>
          </div>
        }
      </div>
  )
}

export default AccountOverlay