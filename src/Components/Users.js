export default function Users(props) {
    const { name, email, password} = props.user;
    return (
        <div>
            <p>My name is {name}.  My email is {email} my password is: {password}.</p>
        </div>
    )
}