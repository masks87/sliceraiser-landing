import LegalPage from "@/components/LegalPage";
import { legalPages } from "@/config/siteSettings";

export default function CookiePolicy() {
  return <LegalPage page={legalPages.cookiePolicy} />;
}
