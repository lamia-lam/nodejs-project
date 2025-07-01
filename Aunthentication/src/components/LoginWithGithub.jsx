import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig";
function LoginWithGithub() {
  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
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
      <button onClick={handleGithubLogin}>Login with Github</button>
    </>
  );
}
export default LoginWithGithub;
