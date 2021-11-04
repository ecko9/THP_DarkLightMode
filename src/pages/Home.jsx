import Header from 'components/Header';
import React from 'react';
import DarkLightMode from 'context/DarkLightMode';

const Home = () => {
  const dlMode2 = React.useContext(DarkLightMode);
  return (
    <div className={`home ${dlMode2.dlMode ? 'light' : 'dark'}`}>
      <Header />
      <h1>Accueil</h1>
      <h3>Confiez vos rêves à des experts du Web</h3>
      <p>
        Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.
        Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.
      </p>
    </div>
  );
};

export default Home;