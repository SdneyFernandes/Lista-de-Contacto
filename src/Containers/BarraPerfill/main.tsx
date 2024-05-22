import * as S from "./style";

const BarraPerfil = () => {
  return (
    <S.UsuarioContainer>
      <S.ImagemUsuario src="../../../image/WhatsApp Image 2022-06-05 at 19.51.32.jpeg" alt="User" />
      <S.InfoUsuario>
        <S.NomeUsuario>Sdney da Encarnação Pereira Fernandes</S.NomeUsuario>
        <S.ContactoUsuario>+55 71992032184</S.ContactoUsuario>
        <S.EmailUsuario> fsidney987@gmail.com</S.EmailUsuario>
      </S.InfoUsuario>
    </S.UsuarioContainer>
  );
};

export default BarraPerfil;
