import Button from "~/components/button";
import { modal } from "~/stores/modal/actions";

export default function Auth() {
  return (
    <div>
      <Button 
      onClick={() => modal.append('auth.login',{
        name: 'Kutay',
        surname: 'Erten'
      })}
      type="button">
        Giriş yap
      </Button>
    </div>
  )
}
