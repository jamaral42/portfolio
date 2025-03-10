import React, { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CookieBanner: React.FC = () => {
  const { t } = useTranslation();
  const [accepted, setAccepted] = useState(Cookies.get("cookieConsent"));

  useEffect(() => {
    if (accepted) {
      Cookies.set("cookieConsent", "true", { expires: 365 });
    }
  }, [accepted]);

  return (
    <>
      {!accepted && (
        <CookieConsent
          location="bottom"
          buttonText={t("cookies.accept")}
          declineButtonText={t("cookies.decline")}
          enableDeclineButton
          onAccept={() => setAccepted("true")}
          onDecline={() => setAccepted("false")}
          style={{
            background: "var(--color-gunmetal)",
            color: "var(--color-platinum)",
            padding: "12px 16px",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap", // Allows wrapping for mobile
          }}
          buttonWrapperClasses="cookie-buttons"
          buttonStyle={{
            background: "var(--color-platinum)",
            color: "var(--color-gunmetal)",
            fontSize: "14px",
            padding: "8px 16px",
            borderRadius: "6px",
            marginLeft: "8px",
          }}
          declineButtonStyle={{
            background: "var(--color-platinum)",
            color: "var(--color-gunmetal)",
            fontSize: "14px",
            padding: "8px 16px",
            borderRadius: "6px",
            marginLeft: "8px",
          }}
        >
          <span style={{ flex: "1 1 auto", textAlign: "left" }}>
            🍪 {t("cookies.message")}{" "}
            <Link to="/cookie-policy" className="underline" style={{ fontWeight: "600" }}>
              {t("cookies.policy_link")}
            </Link>
          </span>
          <div className="cookie-buttons">
            <style>
              {`
                @media (max-width: 768px) {
                  .cookie-buttons {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                    margin-top: 8px;
                  }
                }
              `}
            </style>
          </div>
        </CookieConsent>
      )}
    </>
  );
};

export default CookieBanner;
