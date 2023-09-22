import { Form, Formik } from "formik";
import Button from "~/components/button";
import Input from "~/components/input";
import ModalTitle from "~/components/modal/header";
import Or from "~/components/or";
import { modal } from "~/stores/modal/actions";
import { registerSchema } from "~/validations";

export default function RegisterModal({ destroyAll }){
    return(
        <div className="w-[500px] max-w-full">
            <ModalTitle 
            title="Hesap Ac"
            />
            <Formik
            validationSchema={registerSchema}
            initialValues={{
                username: '',
                password: '',
                email: '',
                rules: false
            }}
            onSubmit={values => console.log('values', values)}
            >
                <Form className="grid gap-y-4 p-4">
                <Input name="username" label="Kullanici Adi" />
                <Input name="email" type="email" label="E-Posta" />
                <Input name="password" type="password" label="Parola" />
                <Button>Hesap Ac</Button>
                <Or label="Zaten Uye misin ?"/>
                    <Button variant="primary-outline" onClick={() =>{
                        destroyAll()
                        modal.append('auth.login')
                    }}>Oturum Ac</Button>
                </Form>
            </Formik>
        </div>
    )
}