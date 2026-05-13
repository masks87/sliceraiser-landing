import LegalPage from "@/components/LegalPage";
import { legalPages } from "@/config/siteSettings";

export default function Privacy() {
  return <LegalPage page={legalPages.privacy} />;
}
