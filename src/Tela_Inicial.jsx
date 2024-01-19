import './Tela_Inicial.css';
import { Link } from 'react-router-dom';

function Tela_Inicial() {
  return (
    <>
      <div className="profiles-gate-container">
        <div className="centered-div list-profiles-container">
          <div className="list-profiles">
            <h1 className="profile-gate-label">Quem está assistindo?</h1>
            <ul className="choose-profile">
              <li className="profile">
                <div>
                <Link to={"/App"}>
                    <div className="avatar-wrapper">
                      <div className="profile-icon" data-profile-guid="N3VYZUWTOJGF5HLCZLYCPCUJWI" style={{ backgroundImage: "url(https://occ-0-3249-3851.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229)" }}></div>
                    </div>
                    <span className="profile-name">Aislan</span>
                  </Link>
                  <div className="profile-children"></div>
                </div>
              </li>
              <li className="profile">
                <div>
                <Link to={"/App"}>
                    <div className="avatar-wrapper">
                      <div className="profile-icon" data-profile-guid="Z6MQIZWB25CIVEGDA5Z26R63XY" style={{ backgroundImage: "url(https://occ-0-3249-3851.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTSu0_BmBbFtGQ5kHieKw_MssrT81lSdmstAOmuPqGrdm1HIJmS9YbuJjbNeLL4rxM24TOo1Yw1WpKsgR4wVLb0vyA7T3C--lhcF.png?r=246)" }}></div>
                    </div>
                    <span className="profile-name">Mikaelly</span>
                  </Link>
                  <div className="profile-children"></div>
                </div>
              </li>
              <li className="profile">
                <div>
                <Link to={"/App"}>
                    <div className="avatar-wrapper">
                      <div className="profile-icon" data-profile-guid="YE2UMHQCSJD5HKBV2JPSCYMGIE" style={{ backgroundImage: "url(https://occ-0-3249-3851.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZumJ3wvSKM7od-r3UjhVF9j3yteWlQYA-51F3SNoI682llhul1Xf_CUkMnfP_17Md2lpOOhbwHeGufvo8kOTjptoS_bcwtniHKz.png?r=e6e)" }}></div>
                    </div>
                    <span className="profile-name">Wallace</span>
                    </Link>
                  <div className="profile-children"></div>
                </div>
              </li>
              <li className="profile">
                <div>
                  <Link to={"/App"}>
                    <div className="avatar-wrapper">
                      <div className="profile-icon" data-profile-guid="BXMR475ITJH27BIZEJD3C3PH2Q" style={{ backgroundImage: "url(https://occ-0-3249-3851.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABauyTgal1_B1ryucDsbzgcrKbWZmkZ79E3a4pw_sxk0LAP8zSaVbxmjgPNaasf2tMRK36cfx15PmwS73jioN-IydUXF6-LV1z-_p.png?r=190)" }}></div>
                    </div>
                    <span className="profile-name">Infantil</span>
                    </Link>
                  <div className="profile-children"></div>
                </div>
              </li>
              <li>
                <a role="link" tabIndex="0">
                  <div className="addProfileIcon icon-tvuiAdd"></div>
                  <span className="profile-name">Adicionar perfil</span>
                </a>
              </li>
            </ul>
          </div>
          <span data-uia="profile-button">
            <a aria-label="Gerenciar perfis" href="/ManageProfiles" className="profile-button">Gerenciar perfis</a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Tela_Inicial;
