import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Store/AuthContext";

const Protected = ({ Component }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
