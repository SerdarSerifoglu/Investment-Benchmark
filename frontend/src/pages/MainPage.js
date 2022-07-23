import MainPageSectionLeft from "../components/MainPageSectionLeft";
import BusinessImage from "../images/business-3d-thoughtful-businessman-with-calculator-coins-and-question-mark-behind 1.png";
import ThirdSectionImage from "../images/business-3d-search-window.png";
import SecondSectionImage from "../images/business-3d-pile-of-gold-bars 1.png";
import FourthSectionImage from "../images/business-3d-man-standing-near-the-board-with-business-analytics.png";

const firstSection = {
  titleText: "Olurdu.com",
  descriptionText:
    "Zamanında şuraya yatırım yapsam şimdi kaç param olurdu dediğin hisse senedi, dövizi yada altınını kısa sürede hesap et!",
  buttonText: "Hesapla",
  mainImage: BusinessImage,
  imagePositionLeft: false,
  sectionHeight: 676,
};

const secondSection = {
  titleText: "Yatırım Araçları",
  descriptionText:
    "Seçilen yatırım araçlarının seçilen Tarihler arasındaki günlük değerlerini ₺ cinsinden gösteren rapordur",
  buttonText: "Hesapla",
  mainImage: SecondSectionImage,
  imagePositionLeft: true,
  sectionHeight: 505,
};

const thirdSection = {
  titleText: "Gelir Raporu",
  descriptionText:
    "Zamanında şuraya yatırım yapsam şimdi kaç param olurdu dediğin hisse senedi, dövizi yada altınını kısa sürede hesap et! Düzeltilecek",
  buttonText: "Hesapla",
  mainImage: ThirdSectionImage,
  imagePositionLeft: false,
  sectionHeight: 487,
};

const fourthSection = {
  titleText: "Birikim Raporu",
  descriptionText:
    "Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa) DÜZENLENECEK",
  buttonText: "Hesapla",
  mainImage: FourthSectionImage,
  imagePositionLeft: true,
  sectionHeight: 758,
};

const MainPage = () => {
  return (
    <>
      <MainPageSectionLeft>{firstSection}</MainPageSectionLeft>
      <MainPageSectionLeft>{secondSection}</MainPageSectionLeft>
      <MainPageSectionLeft>{thirdSection}</MainPageSectionLeft>
      <MainPageSectionLeft>{fourthSection}</MainPageSectionLeft>
    </>
  );
};

export default MainPage;
