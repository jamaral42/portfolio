import React from "react";
import { useTranslation } from "react-i18next";


const CookiePolicy = () => {
  const { t } = useTranslation();

  return (
    <section className="h-[75vh] bg-platinum text-gunmetal">
      <div className="p-6 max-w-3xl mx-auto py-25">
        <h1 className="text-3xl font-bold text-primary">{t("cookies.policy.title")}</h1>
        
        <p className="mt-4">{t("cookies.policy.intro")}</p>

        <h2 className="mt-6 text-xl font-semibold text-secondary">{t("cookies.policy.whatAreCookies")}</h2>
        <p className="mt-2">{t("cookies.policy.whatAreCookiesText")}</p>

        <h2 className="mt-6 text-xl font-semibold text-secondary">{t("cookies.policy.howWeUse")}</h2>
        <p className="mt-2">{t("cookies.policy.howWeUseText")}</p>

        <h2 className="mt-6 text-xl font-semibold text-secondary">{t("cookies.policy.yourChoices")}</h2>
        <p className="mt-2">{t("cookies.policy.yourChoicesText")}</p>

        <h2 className="mt-6 text-xl font-semibold text-secondary">{t("cookies.policy.moreInfo")}</h2>
        <p className="mt-2">{t("cookies.policy.moreInfoText")}</p>

        <p className="mt-8 text-sm text-gray-600">{t("cookies.policy.lastUpdated")}</p>
      </div>
    </section>

  );
};

export default CookiePolicy;