const ContactForm = () => {
    return (
        <form className="w-full">
            <div className='flex flex-col space-y-1'>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' className='border border-gray-300 px-4 py-1' placeholder='Your Full Name' />
            </div>
            <div className='flex flex-col space-y-1'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' className='border border-gray-300 px-4 py-1' placeholder='Your Full Email' />
            </div>
            <div className='flex flex-col space-y-1'>
                <label htmlFor="email">Message</label>
                <textarea name='email' className='border border-gray-300 resize-none px-4 py-1' placeholder='Your Full Email' />
            </div>
            <div className='flex flex-col space-y-1'>
                <button className="bg-black text-white px-4 py-2 my-2">
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default ContactForm