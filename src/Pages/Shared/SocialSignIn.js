import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialSignIn = () => {
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);

  return (
    <div className="my-3 text-center w-100">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-primary mx-3"
      >
        Google Sign In
      </button>
    </div>
  );
};

export default SocialSignIn;
