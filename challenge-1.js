// Challenge #1: Start the button with 5 then double the value on each click
function Button() {
    const [buttonText, setButtonText] = useState(5);
    const doubleValue = () => {
        setButtonText(buttonText * 2);
    }
    return (
        <button onClick={doubleValue}>{buttonText}</button>
    )
}

ReactDOM.render(
    <Button />,
    document.getElementById('mountNode'),
)