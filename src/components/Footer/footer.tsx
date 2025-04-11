import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className=" bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Üst Kısım */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Şirket Bilgileri */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Mermed Medikal</h3>
            <p className="text-gray-400 text-sm">
              {t("footer.trustAndQuality")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/birdunyabez19/"
                className="hover:text-white transition-colors"
                target="_blank"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {[
                t("footer.home"),
                t("footer.aboutUs"),
                t("footer.products"),
                t("footer.services"),
                t("footer.contact"),
              ].map((item, id) => (
                <li key={id}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("footer.contact")}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <HiLocationMarker className="text-gray-400" size={20} />
                <span>
                  Merkez, Dr. Sadık Ahmet Cd. NO:38 D:44-F , 34200 Bağcılar /
                  İstanbul
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <HiPhone className="text-gray-400" size={20} />
                <span>+90 537 896 3310</span>
              </div>
              <div className="flex items-center space-x-3">
                <HiMail className="text-gray-400" size={20} />
                <span>mermedmedikal@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">{t("footer.copyright")}</p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                {t("footer.privacyPolicy")}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t("footer.termsOfUse")}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                KVKK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
