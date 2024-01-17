import AccountOverlayIcon from "./AccountOverlayIcon/AccountOverlayIcon"

const AccountOverlay = () => {
  return (
    <div className="flex flex-col">
        <AccountOverlayIcon type={'MyAccount'}/>
        <AccountOverlayIcon/>
        <AccountOverlayIcon/>
    </div>
  )
}

export default AccountOverlay