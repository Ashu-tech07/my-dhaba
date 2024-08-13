const Contact = () => {
  return (
    <div className="p-2 m-2">
      <h2 className="m-4 p-4 font-bold text-2xl">Contact Us</h2>
      <input
        type="text"
        placeholder="name"
        className="border border-black p-2 m-2"
      />
      <input
        type="text"
        placeholder="message"
        className="border border-black p-2 m-2"
      />
      <button className="border border-black bg-green-200 rounded-lg p-2 font-bold hover:bg-green-400 cursor-pointer">
        Submit
      </button>
    </div>
  );
};

export default Contact;
