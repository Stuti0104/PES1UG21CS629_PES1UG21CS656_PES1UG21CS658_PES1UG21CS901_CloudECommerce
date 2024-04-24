import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const nav = useNavigate();
  const loc = useLocation()
  const gotocart=()=>{
    if(localStorage.user)
    nav('/cart')
    else
    { alert("Sign in ")
      nav('/login')}
  }
  const login=()=>{
    nav('/login')
  }
  const logout =()=>{
    localStorage.removeItem('user')
    alert("logged out")
    nav('/')
    
  }
  const goorder=()=>{
    if(localStorage.user)
    nav('/order/'+localStorage.user)
    else
    { alert("Sign in ")
      nav('/login')}
  }
  return (<div>

<nav className="bg-yellow-200 border-yellow-300 dark:bg-red-500 dark:border-red-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shopzy</span>
    </a>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:mt-0 md:border-0 md:flex-row md:space-x-5">
        <li>
          {loc.pathname === "/login" || loc.pathname === "/signup" ? null : (
            <button className="block py-2 pl-3 pr-4 text-white w-20 bg-yellow-600 rounded-lg md:p-1 hover:bg-yellow-700" onClick={gotocart}>Cart</button>
          )}
        </li>
        <li>
          {loc.pathname === "/login" || loc.pathname === "/signup" ? null : localStorage.user ? (
            <button className="block py-2 pl-3 pr-4 text-white w-20 bg-yellow-600 rounded-lg md:p-1 hover:bg-yellow-700" onClick={logout}>Logout</button>
          ) : (
            <button className="block py-2 pl-3 pr-4 text-white w-20 bg-yellow-600 rounded-lg md:p-1 hover:bg-yellow-700" onClick={login}>Login</button>
          )}
        </li>
        <li>
          {loc.pathname === "/login" || loc.pathname === "/signup" ? null : (
            <button className="block py-2 pl-3 pr-4 text-white w-20 bg-yellow-600 rounded-lg md:p-1 hover:bg-yellow-700" onClick={goorder}>Orders</button>
          )}
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>);
}

export default Navbar;