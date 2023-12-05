import { BiPhoneCall } from "react-icons/bi";
import ContactInfo from "../components/Section/contactSection";
import { MdEmail } from "react-icons/md";
import { BsGeoAlt } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import { AiOutlineSend } from "react-icons/ai";
export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="text-lg h-min bg-[#24242E] flex flex-col justify-between items-center text-white"
      >
        <div>
          <h1 className="xxs:text-4xl sm:text-6xl xxs:mt-16 md:mt-32 mb- font-semibold tracking-wider whitespace-pre-line text-center">
            Let's Connect
          </h1>
          <div className="h-max mt-16 flex xxs:flex-col sm:flex-row items-center xxs:gap-10 sm:gap-28  md:gap-48 lg:gap-64 xl:gap-96 justify-center">
            <div className="flex flex-col  gap-4">
              <ContactInfo
                icon={
                  <BiPhoneCall className="text-4xl group-hover:text-purple-600" />
                }
                title="Call Me"
                contact="+977-9861990090"
                href="tel:+9779861990090"
              />
              <ContactInfo
                icon={
                  <MdEmail className="text-4xl group-hover:text-purple-600" />
                }
                title="Email Me"
                contact="code.aayush01@gmail.com"
                href="mailto:code.aayush01@gmail.com"
              />
              <ContactInfo
                icon={
                  <IoMdPaperPlane className="text-4xl group-hover:text-purple-600" />
                }
                title="Find Me On"
                contact="LinkedIn"
                href="https://www.linkedin.com/in/aayussraut/"
              />
              <ContactInfo
                icon={
                  <BsGeoAlt className="text-4xl group-hover:text-purple-600" />
                }
                title="Location"
                contact="Bhaktapur, Nepal"
                href=""
              />
            </div>
            <div className="sm:w-64 md:w-80 lg:w-96">
              <h4 className="text-gray-400 font-semibold text-2xl xxs:text-center  xxs:mb-4 sm:mb-0">
                Get in touch
              </h4>
              <form
                className="flex flex-col gap-8"
                action={import.meta.env.VITE_FORMSPREE_ENDPOINT}
                method="POST"
              >
                <input
                  className="bg-transparent border-b-2 border-white focus:outline-none focus:border-purple-600"
                  type="text"
                  name="Name"
                  placeholder="Name"
                />
                <input
                  className="bg-transparent border-b-2 border-white focus:outline-none focus:border-purple-600"
                  type="email"
                  name="Email"
                  placeholder="Email"
                />
                <textarea
                  className="bg-transparent border-b-2 border-white focus:outline-none focus:border-purple-600"
                  name="Message"
                  placeholder="Message"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg group"
                >
                  Send
                  <AiOutlineSend className=" group-hover:translate-x-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-10 font-semibold text-xl py-2 flex justify-center w-full bg-purple-500  bottom-0 text-white">
          <p>&copy; All right reserved</p>
        </div>
      </div>
    </>
  );
}
