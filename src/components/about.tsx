import Image from "next/image"

const About = () => {
    return (
        <section className="w-full  flex items-center justify-between py-10 gap-10">
            <div className="w-2/3">
                <span className="">{`Hello, I'm`}</span>
                <h1 className="text-4xl font-semibold mt-2">Ibrahim Ali Hamim</h1>
                <p className="text-xl my-2">Full Stack Developer</p>
                <p className="text-gray-500 my-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, est.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, est.
                </p>
                <div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">Resume</button>
                    <button className="border ml-3 border-blue-500 text-blue-500 py-2 px-4 rounded">Hire Me</button>
                </div>
            </div>
            <div className="w-1/3 ">
                <Image className="w-60 h-60 rounded-full" width={400} height={400} alt="Gaus Al Munir Tushar" src={"/photo.jpg"} />
            </div>

        </section>
    )
}

export default About