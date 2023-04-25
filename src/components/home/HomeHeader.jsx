import { AiFillGithub } from "react-icons/ai";

const HomeHeader = () => {
  return (
    <div className="home-title">
      <h1 className="title">Tiny pieces</h1>
      <div className="description-home">
        A collection of useful pieces for every project
      </div>
      <a href="" target="_blank" rel="noopener noreferrer" className="git-icon">
        <AiFillGithub />
      </a>
    </div>
  );
};
export default HomeHeader;
