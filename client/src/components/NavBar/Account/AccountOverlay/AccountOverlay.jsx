import AccountOverlayIcon from "./AccountOverlayIcon/AccountOverlayIcon"

const AccountOverlay = () => {
  return (
    <div className="flex flex-col cursor-pointer">
        <AccountOverlayIcon type={'myaccount'}/>
        <AccountOverlayIcon type={'help'}/>
        <AccountOverlayIcon type={'logout'}/>
    </div>
  )
}

export default AccountOverlay