import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Title from "../../components/Title/Title";
import UserForm from "./UserForm";

type RegisterProps = {
  edit?: boolean;
}

function Register({ edit }: RegisterProps) {

  return (
    <>
      <Title>
        {edit && (
          <Link to="/list"><FaArrowLeft className="pointer" /></Link>
        )}
        {edit ? "Edição de usuário" : "Registro de usuários"}
      </Title>
      <UserForm edit={edit} />
    </>
  );
}

export default Register;