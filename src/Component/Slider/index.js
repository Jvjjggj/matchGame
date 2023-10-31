import './index.css'

const Slider = props => {
  const {details, getTabId} = props
  const sendTabId = () => {
    getTabId(details.tabId)
  }

  return (
    <li>
      <button onClick={sendTabId} className="btn" type="button">
        {details.displayText}
      </button>
    </li>
  )
}

export default Slider
