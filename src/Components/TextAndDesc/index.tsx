import * as C from './styles';
import { motion } from "framer-motion";

type Props = {
    title: string;
    text: string;
}

const TextAndDesc = ({title, text}: Props) => {
  return (
    <>
        <C.H1>{title}</C.H1>
        <C.p>{text}</C.p> 
    </> 
  )
}

export default TextAndDesc