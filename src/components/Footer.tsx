const Footer = () => {
  return (
    <div className='h-[60px]  flex flex-col  md:grid md:grid-cols-3 items-center justify-center shadow-3xl w-full bg-[#f5f5f5]  bottom-0'>
      <div className="hidden md:flex items-center md:ml-10">Ithihaaz.com</div>
        <div className='text-md font-medium flex items-center justify-center'>Crafted with ❤️ by Vijay Krishna Das</div>
        <div className="hidden md:flex items-center justify-end md:mr-10">Terms & Conditions</div>
    </div>
  )
}

export default Footer