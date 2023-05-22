import * as C from './styles';
import { useForm } from 'react-hook-form';
import {AiFillMail} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import { SelectedPage } from '../../Types/Types';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  }

const ContactMe = ({setSelectedPage}: Props) => {

  const {
    register,
    trigger,
    formState: {errors}
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if(!isValid) {
        e.preventDefault();
    }
  }    

  return (
    <C.Section
        id='contatos'
    >
        <C.Container>
            <C.H1 onViewportEnter={() => setSelectedPage(SelectedPage.Contatos)}>Contate-me</C.H1>
            <C.H2>
                Tire suas dúvidas ou me mande uma mensagem!
            </C.H2>
            <C.Span>
                devmarcoscenteno@gmail.com
            </C.Span>
            <C.form
                target="_blank"
                onSubmit={(onSubmit)}
                method="POST"
                action="https://formsubmit.co/8fc3689dbdac34ddce2dd029abe61051"
            >
                <div className='div-flex'>
                    <div className='div-flex-column'>
                        <label>Seu Nome:</label>
                        <input
                            type='text'
                            placeholder='Digite seu nome'
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                                pattern: /^[A-Za-z]+[\s)^[A-Za-z]+$/gi
                            })}
                        />
                        {errors.name && (
                            <C.Perrors>
                                {errors.name.type === "required" && "Campo obrigatório*"}
                                {errors.name.type === "maxLenght" && "Máximo de 100 caracteres*"}
                                {errors.name.type === "pattern" && "Digite um nome válido*"}
                            </C.Perrors>
                        )}
                    </div>
                    <div className='div-flex-column'>
                        <label>Seu Email:</label>
                        <input
                            type="text"
                            placeholder='Digite seu email'
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            })}
                        />
                        {errors.email && (
                            <C.Perrors>
                                {errors.email.type === "required" && "Campo obrigatório*"}
                                {errors.email.type === "pattern" && "Digite um email válido*"}
                            </C.Perrors>
                        )}
                    </div>
                </div>
                <label>Sua mensagem:</label>
                <textarea
                    placeholder='Digite sua mensagem aqui'
                    {...register("mensagem", {
                        required: true,
                        maxLength: 1000,
                    })}
                />
                {errors.mensagem && (
                    <C.Perrors>
                        {errors.mensagem.type === "required" && "Campo obrigatório*"}
                        {errors.mensagem.type === "maxLenght" && "Máximo 1000 caracteres*"}
                    </C.Perrors>
                )}
                <button type="submit">
                    Enviar
                </button>
            </C.form>

            <C.SocialsArea>
                <h1>Social:</h1>
                <C.IconsDiv>
                    <a href='https://www.linkedin.com/in/marcos-kommling-centeno-b00926277' target="_blank">
                        <AiFillLinkedin/>
                    </a>
                    <a href='mailto:devmarcoscenteno@gmail.com' target="_blank">
                        <AiFillMail/>
                    </a>
                    <a href='https://github.com/devmarcoskc?tab=repositories' target="_blank">
                        <AiFillGithub/>
                    </a>
                </C.IconsDiv>
            </C.SocialsArea>
           
        </C.Container>
    </C.Section>
  )
}

export default ContactMe