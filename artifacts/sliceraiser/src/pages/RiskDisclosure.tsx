import LegalPage from "@/components/LegalPage";
import { legalPages } from "@/config/siteSettings";

export default function RiskDisclosure() {
  return <LegalPage page={legalPages.riskDisclosure} />;
}
