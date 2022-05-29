import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import UseNonAdmin from '../../../Hooks/UseNonAdmin';
import Loading from '../../Shared/Loading/Loading';

const RequireNonAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [nonAdmin, nonAdminLoading] = UseNonAdmin(user)
    const location = useLocation();
    if (loading || nonAdminLoading) {
        return <Loading></Loading>
    }
    if (!user || !nonAdmin) {
        signOut(auth);
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireNonAdmin;