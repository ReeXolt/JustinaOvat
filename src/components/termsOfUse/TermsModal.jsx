import { Button } from "../button/Button";
import propTypes from "prop-types";
export const TermsModal = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="bg-white text-black p-5 rounded-md shadow-2xl w-5/6 md:w-1/2 relative overflow-y-auto h-[500px]">
        <h1 className="font-bold text-xl pb-5">GENERAL TERMS OF USE</h1>
        <div className="space-y-5">
          <p className="text-sm leading-6 font-normal">
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern justinaovat.com’s relationship with you in
            relation to this website. If you disagree with any part of these
            terms and conditions, please do not use our website.
          </p>

          <div className="text-sm leading-6 font-normal space-y-5">
            <p>
              The term justinaovat.com ’ or ‘us’ or ‘we’ refers to the owner of
              the website whose registered office is:
            </p>

            <p>1A Prof Ivara Esu Street,Calabar, Cross River State Nigeria</p>

            <p>The term ‘you’ refers to the user or viewer of our website.</p>
            <p>
              The use of this website is subject to the following terms of use:
            </p>
            <p>
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice
            </p>
          </div>

          <p className="text-sm leading-6 font-normal">
            Neither we nor any third parties provide any warranty or guarantee
            as to the accuracy, timeliness, performance, completeness or
            suitability of the information and materials found or offered on
            this website for any particular purpose. You acknowledge that such
            information and materials may contain inaccuracies or errors and we
            expressly exclude liability for any such inaccuracies or errors to
            the fullest extent permitted by law. Your use of any information or
            materials on this website is entirely at your own risk, for which we
            shall not be liable. It shall be your own responsibility to ensure
            that any services or information available through this website meet
            your specific requirements.
          </p>
          <p className="text-sm leading-6 font-normal">
            This website contains material which is owned by or licensed to us.
            This material includes, but is not limited to, the design, layout,
            look, appearance and graphics. Reproduction is prohibited other than
            in accordance with the copyright notice, which forms part of these
            terms and conditions.
          </p>
          <p className="text-sm leading-6 font-normal">
            All trademarks reproduced in this website, which are not the
            property of, or licensed to the operator, are acknowledged on the
            website.
          </p>
          <p className="text-sm leading-6 font-normal">
            Unauthorized use of this website may give rise to a claim for
            damages and/or be a criminal offence. From time to time, this
            website may also include links to other websites. These links are
            provided for your convenience to provide further information. They
            do not signify that we endorse the website(s). We have no
            responsibility for the content of the linked website(s).
          </p>
          <p className="text-sm leading-6 font-normal">
            Your use of this website and any dispute arising out of such use of
            the website is subject to the laws of the Federal Republic of
            Nigeria.
          </p>
          <p className="text-sm leading-6 font-normal">
            We use cookies to make this site as useful as possible. They are
            small text files we put in your browser to track usage of our site
            but they don’t tell us who you are. If you want to delete any
            cookies that are already on your computer, please refer to the
            instructions for your file management software to locate the file or
            directory that stores cookies.
          </p>
        </div>

        <div className="w-full md:w-[60%] flex justify-between mx-auto my-5">
          <Button
            onClick={closeModal}
            label="decline"
            className="bg-white text-sm font-medium hover:bg-black hover:text-white duration-500 transition-all ease-in-out uppercase py-2 px-8 border-4 border-[#4B494999] text-[#4B494999]"
          />
          <Button
            onClick={closeModal}
            label="accept"
            className="bg-black text-sm font-medium  hover:bg-white hover:text-black duration-500 transition-all ease-in-out uppercase py-2 px-8 border-4 border-[#4B494999] text-white"
          />
        </div>
      </div>
    </div>
  );
};

TermsModal.propTypes = {
  isOpen: propTypes.bool.isRequired,
  closeModal: propTypes.func.isRequired,
};
