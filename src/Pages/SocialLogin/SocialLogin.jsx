import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                // save users to  database
                toast.success('account logged In successfully!')
                navigate(from, { replace: true });
            })
    }
    return (
        <div className='-mt-8'>
        <div className="divider">OR</div>
        <div className='w-full text-center mt-1 '>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info bg-slate-100 border-0 border-b-4 border-l-4 mb-2"><FcGoogle /></button>
        </div>
        <Toaster />
    </div>
    );
};

export default SocialLogin;