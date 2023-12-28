

const AuthRootComponent = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async(event) => {
        event.preventDefault()
        console.log(username, password)
    }
    
}
export default AuthRootComponent