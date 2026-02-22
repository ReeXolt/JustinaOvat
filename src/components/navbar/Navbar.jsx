import { Link, useNavigate } from 'react-router-dom';
import { navLinks as navLinksData } from '../../utils/data';
import { useState } from 'react';
import { IoIosArrowDown, IoIosClose, IoIosMenu } from 'react-icons/io';
import { Button } from '../button/Button';
import { useLogo } from '../../hooks/useLogo';

export const Navbar = () => {
  const navigate = useNavigate();
  const [navLinks, setNavLinks] = useState(
    navLinksData.map((link) => ({ ...link, isOpen: false })),
  );
  const logo = useLogo()
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (id) => {
    setNavLinks(
      navLinks.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item,
      ),
    );
  };

  const handleClick = () => {
    navigate('/book');
  };

  return (
    <section className="w-full">
      <nav className="py-5">
        <div
          className={`main-nav w-[90%] flex justify-between lg:items-center bg-transparent gap-10 mx-auto text-white relative`}
        >
          <div>
            <img src={logo} alt="logo" className="w-20" />
          </div>

          {/* Desktop view */}
          <div className="hidden xl:block w-[1500px]">
            <ul className="relative flex justify-center space-x-8 w-full">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className={`relative hover:text-[#FFFFFFB2] duration-500 transition-all ease-in-out flex items-center uppercase  text-sm text-white  group`}
                  onMouseEnter={() => toggleDropdown(item.id)}
                  onMouseLeave={() => toggleDropdown(item.id)}
                  onClick={() => toggleDropdown(item.id)}
                >
                  <div className="flex gap-2 items-center">
                    <Link to={item.url}>{item.text}</Link>
                    {item.dropdown && (
                      <span
                      className={`dropdown-icon transform transition-transform duration-200 ${
                        item.isOpen ? 'rotate-180' : ''
                      }`}
                      >
                      <IoIosArrowDown />
                      </span>
                    )}
                    </div>

                    <div>
                    {item.dropdown && item.isOpen && (
                      <ul
                        className={`absolute left-[-10px] mt-2  ${item.width}  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50`}
                      >
                        <div>
                          {item.dropdown.map((subItem, index) => (
                            <div key={index}>
                              <Link
                                to={subItem.path}
                                target={
                                  subItem.text === 'JO FOUNDATION' ||
                                  subItem.text === 'SERVICE CRAFT COMPANY'
                                    ? '_blank'
                                    : '_self'
                                }
                                rel={
                                  subItem.text === 'JO FOUNDATION' ||
                                  subItem.text === 'SERVICE CRAFT COMPANY'
                                    ? 'noopener noreferrer'
                                    : ''
                                }
                              >
                                <li className="my-1 text-[9px] px-2 font-bold text-black hover:bg-black hover:text-white">
                                  {subItem.text}
                                </li>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Button
            label="BOOK JUSTINA"
            onClick={handleClick}
            className="px-8 text-sm bg-white text-black  py-2 border-4 border-[#4B4949] hover:bg-black hover:text-white duration-500 transition-all ease-in-out hidden xl:block"
          />

          {/* Mobile view */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden block"
          >
            {isOpen ? <IoIosClose /> : <IoIosMenu />}
          </button>

          {isOpen && (
            <div className="absolute left-0 p-5 top-10 w-52 rounded-md shadow-md bg-white text-black z-50  transition-transform duration-500 transform translate-x-0">
              <ul className="flex flex-col justify-center   space-y-4 w-full">
                {navLinks.map((item) => (
                  <li
                    key={item.id}
                    className={`relative hover:text-[#110a0ab2] duration-500 transition-all ease-in-out  uppercase  text-xs font-bold text-black group`}
                    onMouseEnter={() => toggleDropdown(item.id)}
                    onMouseLeave={() => toggleDropdown(item.id)}
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <div className="flex gap-2 items-center">
                      <Link to={item.url}>{item.text}</Link>
                      {item.dropdown && (
                        <span
                          className={`dropdown-icon transform transition-transform duration-200 ${
                            item.isOpen ? 'rotate-180' : ''
                          }`}
                        >
                          <IoIosArrowDown />
                        </span>
                      )}
                    </div>

                    {item.dropdown && item.isOpen && (
                      <div>
                        <ul
                          className={`  relative  z-50 mt-2  ${item.width}  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                        >
                          {item.dropdown.map((subItem, index) => (
                            <div key={index}>
                              <Link
                                to={subItem.path}
                                target={
                                  subItem.text === 'JO FOUNDATION' ||
                                  subItem.text === 'SERVICE CRAFT COMPANY'
                                    ? '_blank'
                                    : '_self'
                                }
                                rel={
                                  subItem.text === 'JO FOUNDATION' ||
                                  subItem.text === 'SERVICE CRAFT COMPANY'
                                    ? 'noopener noreferrer'
                                    : ''
                                }
                              >
                                <li className="my-1 text-[9px] px-2 font-bold text-black hover:bg-black hover:text-white">
                                  {subItem.text}
                                </li>
                              </Link>
                            </div>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <Button
                label="BOOK JUSTINA"
                onClick={handleClick}
                className="px-8 text-sm bg-white text-black  py-2 border-4 hover:bg-black border-[#4B4949] hover:text-white duration-500 transition-all ease-in-out mt-5"
              />
            </div>
          )}
        </div>
      </nav>
    </section>
  );
};
