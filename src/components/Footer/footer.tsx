import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Üst Kısım */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Şirket Bilgileri */}
          <div className="space-y-4">
            {/* <h3 className="text-2xl font-bold text-white">Mermed Medikal</h3> */}
            <p className="text-gray-400 text-sm">
              Sağlık sektöründe güvenilir ve kaliteli hizmet sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Hızlı Linkler
            </h4>
            <ul className="space-y-2">
              {[
                "Anasayfa",
                "Hakkımızda",
                "Ürünler",
                "Hizmetler",
                "İletişim",
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
            <h4 className="text-lg font-semibold text-white mb-4">İletişim</h4>
            <div className="space-y-3">
              {/* <div className="flex items-center space-x-3">
                <HiLocationMarker className="text-gray-400" size={20} />
                <span>
                  Merkez, Dr. Sadık Ahmet Cd. NO:38 D:44-F , 34200 Bağcılar /
                  İstanbul
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <HiPhone className="text-gray-400" size={20} />
                <span>+90 537 896 3310</span>
              </div> */}
              <div className="flex items-center space-x-3">
                <HiMail className="text-gray-400" size={20} />
                {/* <span>mermedmedikal@gmail.com</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {/* © 2025 Mermed Medikal. Tüm hakları saklıdır. */}
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Kullanım Şartları
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
