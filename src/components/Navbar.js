import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="container-md bg-blue-100 flex flex-wrap justify-around items-center">
      <div>
        {isAuthenticated ? (
          <h1 className=" text-3xl font-semibold p-3 basis-1/2">{`Welcome ${user.name}`}</h1>
        ) : (
          <h1 className=" text-3xl font-semibold p-3 basis-1/2">Image_Cloud</h1>
        )}
      </div>
      {isAuthenticated ? (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          className="bg-transparent hover:bg-red-200 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Logout
        </button>
      ) : (
        <div>
          <button
            onClick={() => loginWithRedirect()}
            className="mx-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
