import './index.css'

const TabItem = props => {
  const {tabDetails, clickedTab, istabActive} = props
  const {tabId, displayText} = tabDetails

  const buttonStyle = istabActive ? 'button-border' : ''

  const onClickTab = () => {
    clickedTab(tabId)
  }
  return (
    <li className="tab-li-container">
      <button
        type="button"
        className={`btn-style ${buttonStyle}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
