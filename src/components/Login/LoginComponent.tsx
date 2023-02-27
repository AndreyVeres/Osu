/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase/firebase';
import setUserData from '../../store/actionCreators/userData/setUserData';
import { useDispatch } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import './loginComponentStyles.scss';
import { useLocation, useNavigate } from 'react-router-dom';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const handleLogin = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        if (user.email !== null && user.displayName !== null && user.photoURL !== null) {
          dispatch(setUserData({
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL,
            accessToken: 'user.accessToken',
            performance: userData.performance,
            accuracy: userData.accuracy,
            lvl: userData.lvl,
            uuid: user.uid,
            maps: userData.maps,
          }));
        }
      } else {
        setError('No such user!');
      }
    } catch (err) {
      if (err) {
        setError(err as string);
      }
    }
    navigate(fromPage, { replace: true });
  };

  return (
    <div className="login">
      {!error ? null : (
        <div className="error-msg">
          <i className="fa fa-times-circle"></i>
          {error.toString()}
        </div>
      )}
      <div>
        <h1>Sign in</h1>
        <div>
          <p className="login__input-title">Login</p>
          <input value={email} onChange={(e) => { setEmail(e.target.value); }} type="email" />
        </div>
        <div>
          <p className="login__input-title">Password</p>
          <input value={password} onChange={(e) => { setPassword(e.target.value); }} type="text" />
        </div>
      </div>
      <button className="sing-in__button hover-pink-bgc" onClick={() => { handleLogin(email, password); }} type="submit">Sign in</button>
    </div>
  );
}

export default LoginComponent;
