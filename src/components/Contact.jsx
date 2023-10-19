import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#ffffff] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/19883459-23c5-44be-abaf-cbcba1e5956d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#4594fd] text-gray-900">
            Contact
          </p>
          <p className="text-gray-700 py-4">
            Submit the form below or send me an email -
            janssenkyran999@gmail.com
          </p>
        </div>
        <input
          className="bg-[#f5f5f5] p-3 rounded border border-[#e0e0e0] ring-1 ring-[#4594fd] focus:ring-[#4594fd] focus:border-[#4594fd] placeholder-[#9e9e9e] transition duration-300 hover:border-[#4594fd]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-3 rounded bg-[#f5f5f5] border border-[#e0e0e0] ring-1 ring-[#4594fd] focus:ring-[#4594fd] focus:border-[#4594fd] placeholder-[#9e9e9e] transition duration-300 hover:border-[#4594fd]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#f5f5f5] p-3 rounded border border-[#e0e0e0] ring-1 ring-[#4594fd] focus:ring-[#4594fd] focus:border-[#4594fd] placeholder-[#9e9e9e] resize-none transition duration-300 hover:border-[#4594fd]"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white bg-[#4594fd] hover:bg-[#4594fd] focus:ring-[#4594fd] px-4 py-3 my-8 mx-auto flex items-center rounded transition duration-300">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
