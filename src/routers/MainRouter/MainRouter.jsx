import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";
import LoyalRegister from "../../pages/Register/LoyalRegister";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Profile from "../../pages/Profile/Profile";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import ContactUs from "../../pages/ContactUs/contactUs";
import Trams from "../../pages/Trams/Trams";
import UserInfoForm from "../../pages/Dashboard/UserInfoForm/UserInfoForm";
import UnionInfoForm from "../../pages/Dashboard/UnionInfoForm/UnionInfoForm";
import ApplyForCertificate from "../../pages/Dashboard/ApplyForCertificate/ApplyForCertificate";
import FamilyCertificate from "../../pages/Dashboard/FamilyCertificate/FamilyCertificate";
import EditInformation from "../../pages/Profile/EditInformation";
import ChangePassword from "../../pages/Profile/ChangePassword";
import TwoFactorAuthenthication from "../../pages/Profile/TwoFactorAuthenthication";
import AllCertificate from "../../pages/Dashboard/AllCertificate/AllCertificate";
import InheritanceCertificate from "../../pages/Dashboard/InheritanceCertificate/InheritanceCertificate";
import SuccessionCertificate from "../../pages/Dashboard/SuccessionCertificate/SuccessionCertificate";
import CitizenshipCertificate from "../../pages/Dashboard/CitizenshipCertificate/CitizenshipCertificate";
import DeathCertificate from "../../pages/Dashboard/DeathCertificate/DeathCertificate";
import NationalityCertificate from "../../pages/Dashboard/NationalityCertificate/NationalityCertificate";
import NonRemarriageCertificate from "../../pages/Dashboard/NonRemarriageCertificate/NonRemarriageCertificate";
import LandlessCertificate from "../../pages/Dashboard/LandlessCertificate/LandlessCertificate";
import NewVoterAttestation from "../../pages/Dashboard/NewVoterAttestation/NewVoterAttestation";
import WidowAttestation from "../../pages/Dashboard/WidowAttestation/WidowAttestation";
import ParentsPermission from "../../pages/Dashboard/Parent'sPermission/Parent'sPermission";
import CommunityCharter from "../../pages/Dashboard/CommunityCharter/CommunityCharter";
import AgriculturalCertification from "../../pages/Dashboard/AgriculturalCertification/AgriculturalCertification";
import FreedomfighterCertification from "../../pages/Dashboard/FreedomfighterCertification/FreedomfighterCertification";
import AnnualIncomeCertificate from "../../pages/Dashboard/AnnualIncomeCertificate/AnnualIncomeCertificate";
import OrphanCertificate from "../../pages/Dashboard/OrphanCertificate/OrphanCertificate";
import MarriageMertificate from "../../pages/Dashboard/MarriageMertificate/MarriageMertificate";
import MonthlyIncomeCertificate from "../../pages/Dashboard/MonthlyIncomeCertificate/MonthlyIncomeCertificate";
import CharacterCertificate from "../../pages/Dashboard/CharacterCertificate/CharacterCertificate";
import TribalCharter from "../../pages/Dashboard/TribalCharter/TribalCharter";
import NationalIdentityInformation from "../../pages/Dashboard/Amendment of NationalIdentityInformation/NationalIdentityInformation";
import ChildlessnessCertificate from "../../pages/Dashboard/ChildlessnessCertificate/ChildlessnessCertificate";
import CertificateOfFinancialInsolvency from "../../pages/Dashboard/CertificateOfFinancialInsolvency/CertificateOfFinancialInsolvency";
import NoObjectionCertificate from "../../pages/Dashboard/NoObjectionCertificate/NoObjectionCertificate";
import VoterAreaTransferCertificate from "../../pages/Dashboard/VoterAreaTransferCertificate/VoterAreaTransferCertificate";
import DisabilityCertificate from "../../pages/Dashboard/DisabilityCertificate/DisabilityCertificate";
import CertificateName from "../../pages/Dashboard/CertificateName/CertificateName";
import UnemploymentCertificate from "../../pages/Dashboard/UnemploymentCertificate/UnemploymentCertificate";
import RemarriageCertificate from "../../pages/Dashboard/RemarriageCertificate/RemarriageCertificate";
import Tradelicense from "../../pages/Dashboard/Tradelicense/Tradelicense";
import PermanentResidentCertificate from "../../pages/Dashboard/PermanentResidentCertificate/PermanentResidentCertificate";
import AutoRickshawTradeLicense from "../../pages/Dashboard/AutoRickshawTradeLicense/AutoRickshawTradeLicense";
import UnmarriedCertificate from "../../pages/Dashboard/UnmarriedCertificate/UnmarriedCertificate";
import MiscellaneousCertificates from "../../pages/Dashboard/MiscellaneousCertificates/MiscellaneousCertificates";
import ConstructionPermissionCertificate from "../../pages/Dashboard/ConstructionPermissionCertificate/ConstructionPermissionCertificate";
import CertificateDetails from "../../pages/Dashboard/CertificateDetails/CertificateDetails";
import CertificateVerification from "../../pages/Dashboard/QrcodeDetails/CertificateVerification";
import QrCertificateDetails from "../../pages/Dashboard/QrCertificateDetails/QrCertificateDetails";
import LandingLayout from "../../layouts/LandingLayout/LandingLayout";
import CertificateLanding from "../../pages/CertificateLanding/CertificateLanding";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/loRegister",
                element: <LoyalRegister />,
            },
            {
                path: "/reset-password",
                element: <ResetPassword />,
            },

            {
                path: "/contact",
                element: <ContactUs />,
            },
            {
                path: "/terms-and-conditions",
                element: <Trams />,
            },
            {
                path: "/certificate-verification",
                element: <CertificateVerification />,
            },
            {
                path: "/qr-code-details",
                element: <QrCertificateDetails />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "/dashboard/profile",
                element: <Profile />,
            },
            {
                path: "/dashboard/edit-information",
                element: <EditInformation />,
            },
            {
                path: "/dashboard/change-password",
                element: <ChangePassword />,
            },
            {
                path: "/dashboard/twofactor",
                element: <TwoFactorAuthenthication />,
            },
            {
                path: "/dashboard/user-info-form",
                element: <UserInfoForm />,
            },
            {
                path: "/dashboard/union-info-form",
                element: <UnionInfoForm />,
            },
            {
                path: "/dashboard/all-certificate",
                element: <AllCertificate />,
            },
            {
                path: "/dashboard/certificate/:id",
                element: <CertificateDetails />,
            },
            {
                path: "/dashboard/apply-for-certificate",
                element: <ApplyForCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/পারিবারিক সনদ",
                element: <FamilyCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/ওয়ারিশ সনদ",
                element: <InheritanceCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/উত্তরাধিকার সনদ",
                element: <SuccessionCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/নাগরিক সনদ",
                element: <CitizenshipCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/মৃত্যু সনদ",
                element: <DeathCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/জাতীয়তা সনদ",
                element: <NationalityCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/পুনঃবিবাহ না হওয়া সনদ",
                element: <NonRemarriageCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/নতুন ভোটার প্রত্যয়ন",
                element: <NewVoterAttestation />,
            },
            {
                path: "/dashboard/apply-for-certificate/ভূমিহীন সনদ",
                element: <LandlessCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/বিধবা প্রত্যয়ন",
                element: <WidowAttestation />,
            },
            {
                path: "/dashboard/apply-for-certificate/অভিভাবকের অনুমতিপত্র",
                element: <ParentsPermission />,
            },
            {
                path: "/dashboard/apply-for-certificate/সম্প্রদায় সনদ",
                element: <CommunityCharter />,
            },
            {
                path: "/dashboard/apply-for-certificate/কৃষি প্রত্যয়ন",
                element: <AgriculturalCertification />,
            },
            {
                path: "/dashboard/apply-for-certificate/মুক্তিযোদ্ধা প্রত্যয়ন",
                element: <FreedomfighterCertification />,
            },
            {
                path: "/dashboard/apply-for-certificate/বাৎসরিক আয়ের সনদপত্র",
                element: <AnnualIncomeCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/এতিম সনদ",
                element: <OrphanCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/বিবাহিত সনদ",
                element: <MarriageMertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/মাসিক আয়ের সনদ",
                element: <MonthlyIncomeCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/চারিত্রিক সনদ",
                element: <CharacterCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/উপজাতি সনদ",
                element: <TribalCharter />,
            },
            {
                path: "/dashboard/apply-for-certificate/জাতীয় পরিচয় তথ্য সংশোধন",
                element: <NationalIdentityInformation />,
            },
            {
                path: "/dashboard/apply-for-certificate/নিঃসন্তান প্রত্যয়ন",
                element: <ChildlessnessCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/আর্থিক অস্বচ্ছলতার সনদ",
                element: <CertificateOfFinancialInsolvency />,
            },
            {
                path: "/dashboard/apply-for-certificate/অনাপত্তি সনদ",
                element: <NoObjectionCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/ভোটার এলাকা স্থানান্তর প্রত্যয়ন",
                element: <VoterAreaTransferCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/প্রতিবন্ধী সনদ",
                element: <DisabilityCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/প্রত্যায়ন পত্র নাম",
                element: <CertificateName />,
            },
            {
                path: "/dashboard/apply-for-certificate/বেকারত্ব সনদ",
                element: <UnemploymentCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/পুনঃবিবাহ প্রত্যয়ন",
                element: <RemarriageCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/ট্রেড লাইসেন্স",
                element: <Tradelicense />,
            },
            {
                path: "/dashboard/apply-for-certificate/স্থায়ী বাসিন্দা সনদ",
                element: <PermanentResidentCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/অবিবাহিত সনদ",
                element: <UnmarriedCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/অটো রিক্সা ট্রেডলাইসেন্স",
                element: <AutoRickshawTradeLicense />,
            },
            {
                path: "/dashboard/apply-for-certificate/বিবিধ সনদ",
                element: <MiscellaneousCertificates />,
            },
            {
                path: "/dashboard/apply-for-certificate/অবকাঠামো নির্মাণের অনুমতি সনদ",
                element: <ConstructionPermissionCertificate />,
            },
        ],
    },
    {
        path: "/landing",
        element: <LandingLayout />,
        children: [
            {
                path: `/landing/certificate-details/:id`,
                element: <CertificateLanding />,
            },
        ],
    },
]);

export default MainRouter;
