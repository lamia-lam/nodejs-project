import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
function LoginWithGoogle() {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(result);
      console.log("user info", user);
      console.log("token", token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </>
  );
}
export default LoginWithGoogle;
