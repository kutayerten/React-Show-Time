import { Formik , Form } from "formik";
import Button from "~/components/button";
import Input from "~/components/input";
import ModalTitle from "~/components/modal/header";
import Or from "~/components/or";
import { setUser } from "~/stores/auth/actions";
import { modal } from "~/stores/modal/actions";
import { loginSchema } from "~/validations";
import PropTypes from "prop-types";

export default function LoginModal({ destroy }){
    return(
        <>
           <ModalTitle 
           title="Giris Yap"
           />
           
                <Formik
                validationSchema={loginSchema}
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={ values => {
                    setUser(values)
                    destroy()
                }}
                >

                    <Form className="grid gap-y-4  p-4">
                   <Input label="Kullanici Adi" name="username" />
                   <Input label="Parola" name="password" type="password"/>
                    <Button type="submit"> Giris Yap </Button>
                   <Or />
                    <Button 
                    type="button" 
                    variant="primary-outline"
                    onClick={() => modal.append('auth.register')}
                    > 
                    Hesap Ac 
                    </Button>
                  
                    </Form>

                </Formik>
          
        </>
    )
}

LoginModal.propTypes = {
    destroy: PropTypes.func
}