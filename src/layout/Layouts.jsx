import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import InviteAdminModal from "../components/modals/InviteAdminModal";
import { useState } from "react";

const Layouts = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 relative">
        <Header onOpenInviteModal={() => setShowInviteModal(true)} />
        
        <main className="pt-[72px] p-4">
          <Outlet />
        </main>

        {showInviteModal && (
          <InviteAdminModal onClose={() => setShowInviteModal(false)} />
        )}
      </div>
    </div>
  );
};

export default Layouts;
