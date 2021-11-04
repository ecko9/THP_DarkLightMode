import Header from 'components/Header';
import React from 'react';
import DarkLightMode from 'context/DarkLightMode';

const Agency = () => {
  const dlMode2 = React.useContext(DarkLightMode);
  return (
    <div className={`agency ${dlMode2.dlMode ? 'light' : 'dark'}`}>
      <Header />
      <h1>The Agency</h1>
      <h3>Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.</h3>
      <p>
        De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.
        Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.
      </p>
    </div>
  );
};

export default Agency;