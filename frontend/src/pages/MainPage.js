import MainPageSection from "../components/MainPageSection";
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
  buttonRouter: "/revenue-report",
};

const secondSection = {
  titleText: "Yatırım Araçları",
  descriptionText:
    "Seçilen yatırım araçlarının seçilen Tarihler arasındaki günlük değerlerini ₺ cinsinden gösteren rapordur",
  buttonText: "Hesapla",
  mainImage: SecondSectionImage,
  imagePositionLeft: true,
  sectionHeight: 505,
  buttonRouter: "/investment-tools",
};

const thirdSection = {
  titleText: "Gelir Raporu",
  descriptionText:
    "Zamanında şuraya yatırım yapsam şimdi kaç param olurdu dediğin hisse senedi, dövizi yada altınını kısa sürede hesap et! Düzeltilecek",
  buttonText: "Hesapla",
  mainImage: ThirdSectionImage,
  imagePositionLeft: false,
  sectionHeight: 487,
  buttonRouter: "/revenue-report",
};

const fourthSection = {
  titleText: "Birikim Raporu",
  descriptionText:
    "Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa)Seçilen yatırım araçlarının (1 ile 5 arasında sa) DÜZENLENECEK",
  buttonText: "Hesapla",
  mainImage: FourthSectionImage,
  imagePositionLeft: true,
  sectionHeight: 758,
  buttonRouter: "/cumulative-report",
};

const MainPage = () => {
  return (
    <>
      <MainPageSection>{firstSection}</MainPageSection>
      <MainPageSection>{secondSection}</MainPageSection>
      <MainPageSection>{thirdSection}</MainPageSection>
      <MainPageSection>{fourthSection}</MainPageSection>
    </>
  );
};

export default MainPage;
