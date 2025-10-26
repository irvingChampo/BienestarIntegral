import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import KitchenRegistrationForm from "../organisms/KitchenRegistrationForm";

function KitchenRegistrationPage({ onNavigateToLanding }) {
  return (
    <>
      <Header />
      <main className="container section">
        <KitchenRegistrationForm onBack={onNavigateToLanding} />
      </main>
      <Footer onOpenModal={onOpenModal} /> {/* Pasa la prop a Footer */}
    </>
  );
}

export default KitchenRegistrationPage;