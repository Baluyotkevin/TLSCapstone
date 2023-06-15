import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import GetAllPosts from "./components/Posts/AllPosts";
import PostForm from "./components/Posts/PostOneForm"
import CreatePostOnPost from "./components/Posts/CreatePostOnPost";
import DeletePost from "./components/Posts/DeletePost";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import GetAllCurrComments from "./components/Comments/AllCurrComments";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          {/* <Route path='/post/:postId/delete' component={DeletePost} /> */}
          <Route path='/profilePage' component= {ProfilePage} />
          <Route path='/comments/current' component={GetAllCurrComments} />
          <Route path='/:postId/new' component={CreatePostOnPost} />
          {/* <Route path='/post' component={PostForm} /> */}
          <Route path='/' component={GetAllPosts} />
        </Switch>
      )}
    </>
  );
}

export default App;
