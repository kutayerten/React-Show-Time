import { Formik , Form } from "formik";
import Button from "~/components/button";
import Input from "~/components/input";
import ModalTitle from "~/components/modal/header";
import Or from "~/components/or";
import { modal } from "~/stores/modal/actions";
import { loginSchema } from "~/validations";


export default function LoginModal(){
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
                onSubmit={(values,actions)=> {

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