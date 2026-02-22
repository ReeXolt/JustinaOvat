import { Link } from "react-router-dom";
import { socialIcons } from "../../utils/data";

export const SocialIcons = () => {
  return (
    <div className="flex items-center gap-3">
      {socialIcons.map((icon) => {
        return (
          <div key={icon.id}>
            <Link to={icon.url}>
              <img src={icon.icon} alt="icon" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
// import { FaInstagram } from "react-icons/fa";
// import { AiOutlineFacebook } from "react-icons/ai";
// import { FiLinkedin } from "react-icons/fi";
// import { FaXTwitter } from "react-icons/fa6";

// export const SocialIcons = () => {
//   return (
//     <div className="flex items-center gap-3 text-white">
//       <div>
//         <Link
//           to="https://www.instagram.com/justiceovat/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaInstagram />
//         </Link>
//       </div>
//       <div>
//         <Link
//           to=" https://www.facebook.com/profile.php?id=100008343258165&mibextid=ZbWKwL"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <AiOutlineFacebook />
//         </Link>
//       </div>
//       <div>
//         <Link
//           to="https://www.linkedin.com/in/justina-ovat-04523480/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FiLinkedin />
//         </Link>
//       </div>

//       <div>
//         <Link
//           to="https://twitter.com/JustinaOvat"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaXTwitter />
//         </Link>
//       </div>
//     </div>
//   );
// };
