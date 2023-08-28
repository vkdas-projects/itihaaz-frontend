import image from "../assets/408.png";
const About = () => {
  return (
    <div className="py-6 px-5 md:max-w-6xl mx-auto">
      {" "}
      <div>
        <div className="text-4xl h-[250px] md:h-full md:text-[5rem] font-bold mb-4 flex-col md:flex-row flex justify-center  items-center ">
          <img src={image} className="w-[60%] md:w-[40%]" alt="" />
          <div className=" ">
            <div className="md:mb-10">History</div>
            <div className="ml-10">Simplified !</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className=" text-5xl  md:text-6xl font-semibold">
            Welcome to Itihaaz! <br />
            <div className="text-2xl mt-2 md:mt-0">
              {" "}
              your go-to destination for captivating historical articles.
            </div>
          </div>

          <div className="text-lg">
            We are passionate storytellers dedicated to unraveling the mysteries
            of the past, shedding light on forgotten tales, and bringing history
            to life. We believe that history is more than just a collection of
            dates and facts, it is a tapestry of human experiences that has
            shaped our present. Our mission is to make history accessible,
            engaging, and relevant to all readers. Through our meticulously
            researched articles, we strive to inspire curiosity, ignite a love
            for learning, and encourage a deeper appreciation for the world we
            inhabit. <div className="my-2">
            Our blog offers a diverse range of historical
            articles, covering various periods, civilizations, and topics. From
            ancient civilizations and world-changing events to remarkable
            individuals and significant cultural movements, we delve into
            captivating narratives that transport you through time. Our team of
            passionate writers and researchers work tirelessly to provide you
            with accurate, well-crafted articles that entertain, inform, and
            spark meaningful conversations.
            </div>
            <div className="text-3xl font-bold my-2"> Why Choose Itihaaz? </div>
            <div className="my-2">
              <li className="list-disc text-xl font-bold">
                {" "}
                Engaging Stories:{" "}
              </li>
            </div>
            We understand the importance of storytelling in capturing readers'
            attention. Our articles are crafted to immerse you in the past,
            allowing you to experience history firsthand through vivid
            narratives, anecdotes, and insights.
            <div className="my-2">
              <li className="list-disc text-xl font-bold">
                Meticulous Research:{" "}
              </li>
            </div>
            Our commitment to accuracy is unwavering. We extensively research
            historical events, consult reliable sources, and fact-check
            diligently, ensuring our articles are informative and reliable.
            <div className="my-2">
              <li className="list-disc text-xl font-bold">
                Accessible Approach:{" "}
              </li>
            </div>
            We strive to make history accessible to all. Whether you're a
            seasoned history enthusiast or a newcomer, our articles are tailored
            to engage readers of every background, making the subject matter
            relatable and understandable.
            <div className="my-2">
              <li className="list-disc text-xl font-bold">
                Discover the Lesser-Known:{" "}
              </li>
            </div>
            While we explore widely known historical events, we also revel in
            uncovering hidden gems and forgotten stories from the annals of
            history. 
           <div className="my-2">
           Get ready to unearth intriguing tales that have somehow
            slipped through the cracks of mainstream historical narratives. Join
            the Conversation We invite you to embark on a captivating journey
            through time with us. Join our community of history enthusiasts,
            share your thoughts, ask questions, and contribute to the ongoing
            exploration of our past. Together, let's unlock the vast treasures
            of history and gain a deeper understanding of our shared human
            story. History awaits.
           </div>
            <div className="text-6xl text-center my-6">
              Start exploring with Itihaaz today!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
