const SubMenuNavbar = ({ menuSubNavbar }) => {
  
  return (
    <ul className="absolute w-[200px]">
    {
      menuSubNavbar.map(({ text, url }) => (
       <li key={Math.random()}><a href={url} className="flex py-3 px-6 bg-gray-900 hover:bg-gray-800 transition-all ">{ text }</a></li>
    ))}
    </ul>     
  )
}

export default SubMenuNavbar
