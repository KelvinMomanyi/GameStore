import React,{useState} from 'react'

const DropdownMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 // const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='menu'>
       <h1 className='h11'onClick={()=>setMenuOpen(!menuOpen)}>Menu</h1> 
      {menuOpen && (
        <ul className='h11'>
          <li>Popular</li>
          <li>Trending</li>
          <li>Latest</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;





