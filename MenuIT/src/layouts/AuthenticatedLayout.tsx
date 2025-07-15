import React from "react";
import { Outlet } from "react-router-dom";
import { useSessionTimeout } from "../hooks/useSessionTimeout";
import SessionExpiredModal from "../components/SessionExpiredModal";
import "./AuthenticatedLayout.css";
import AuthenticatedHeader from "../adminmenu/components/AuthenticatedHeader";
const AuthenticatedLayout: React.FC = () => {
  const { isSessionExpired } = useSessionTimeout();

  return (
    <div className="authenticated-layout">
      {isSessionExpired && <SessionExpiredModal />}

      <main className="main-content">
        <AuthenticatedHeader />

        <Outlet />
      </main>
    </div>
  );
};

export default AuthenticatedLayout;
