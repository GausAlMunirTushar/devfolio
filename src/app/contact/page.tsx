import ContactForm from "@/components/contact-form"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaMedium } from "react-icons/fa";
import Link from "next/link"
import { SiLeetcode } from "react-icons/si";

const ContactPage = () => {
    return (
        <section className="max-w-5xl mx-auto py-12">
            <div className="w-full flex justify-between gap-10">
                <div className="w-1/2">
                    <ContactForm />
                </div>
                <div className="w-1/2 space-y-1.5">
                    <h1 className="text-xl font-semibold">Contact Information:</h1>
                    <h1><strong>Email: </strong> gausalmunirtushar@gmail.com</h1>
                    <h1><strong>Phone: </strong> 9343498934</h1>
                    <h1><strong>Address: </strong> Dhaka, Bangladesh</h1>
                    <div className="flex gap-3">
                        <Link href="https://linkedin.com/in/gausalmunirtushar"> <FaLinkedin size={30} /></Link>

                        <Link href="https://linkedin.com/in/gausalmunirtushar"> <FaGithub size={30} /></Link>
                        <Link href="https://linkedin.com/in/gausalmunirtushar"> <FaMedium size={30} /></Link>
                        <Link href="https://linkedin.com/in/gausalmunirtushar"> <SiLeetcode size={30} /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPage