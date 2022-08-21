import { Create, PasswordInput, SimpleForm, TextInput } from "react-admin"

const PasswordCreate = (props) =>{

    return (
        <Create title="Add a new password" {...props}>
            <SimpleForm>
                <TextInput source='username'/>
                <PasswordInput source='password'/>
                <TextInput source='site'/>
            </SimpleForm>
        </Create>
    )
}

export default PasswordCreate;