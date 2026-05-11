import { useEffect, useRef } from "react";
import {
  ClerkProvider,
  SignIn,
  SignUp,
  Show,
  useClerk,
} from "@clerk/react";
import { shadcn } from "@clerk/themes";
import {
  Switch,
  Route,
  useLocation,
  Router as WouterRouter,
  Redirect,
} from "wouter";
import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import Layout from "@/components/Layout";
import CookieConsent from "@/components/CookieConsent";
import Home from "@/pages/Home";
import Opportunities from "@/pages/Opportunities";
import OpportunityDetail from "@/pages/OpportunityDetail";
import Equity from "@/pages/Equity";
import FixedIncome from "@/pages/FixedIncome";
import Dashboard from "@/pages/Dashboard";
import Contact from "@/pages/Contact";
import Legal from "@/pages/Legal";
import Terms from "@/pages/Terms";
import Faq from "@/pages/Faq";
import InvestorRelations from "@/pages/InvestorRelations";
import { setBaseUrl } from "@workspace/api-client-react";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL;

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

setBaseUrl(window.location.origin);

function stripBase(path: string): string {
  return basePath && path.startsWith(basePath) ? path.slice(basePath.length) || "/" : path;
}

if (!clerkPubKey) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY in environment");
}

const clerkAppearance = {
  theme: shadcn,
  cssLayerName: "clerk",
  options: {
    logoPlacement: "inside" as const,
    logoLinkUrl: basePath || "/",
    logoImageUrl: `${window.location.origin}${basePath}/logo.png`,
  },
  variables: {
    colorPrimary: "#4285f4",
    colorForeground: "#020817",
    colorMutedForeground: "#8e9196",
    colorDanger: "#dc2626",
    colorBackground: "#ffffff",
    colorInput: "#ffffff",
    colorInputForeground: "#020817",
    colorNeutral: "#e5e7eb",
    fontFamily: "'Inter', sans-serif",
    borderRadius: "12px",
  },
  elements: {
    rootBox: "w-full",
    modalBackdrop:
      "!bg-[#020817]/55 backdrop-blur-md",
    modalContent: "!shadow-none",
    cardBox:
      "bg-white rounded-[20px] w-[440px] max-w-full overflow-hidden shadow-[0_30px_80px_-20px_rgba(8,47,111,0.35),0_8px_24px_-12px_rgba(8,47,111,0.25)] border border-gray-100",
    card:
      "!shadow-none !border-0 !bg-transparent !rounded-none px-8 pt-8 pb-6 relative",
    header: "flex flex-col items-center gap-2 pb-2",
    footer:
      "!shadow-none !border-0 !bg-[#f7f9ff] !rounded-none px-8 py-4 border-t border-gray-100",
    headerTitle:
      "text-[#020817] font-bold text-[22px] tracking-tight text-center",
    headerSubtitle: "text-[#8e9196] text-[13px] text-center",
    socialButtons: "gap-2",
    socialButtonsBlockButton:
      "border border-gray-200 hover:!bg-[#f7f9ff] hover:!border-[#4285f4]/40 text-[#020817] rounded-xl h-11 transition-colors shadow-none",
    socialButtonsBlockButtonText: "text-[#020817] font-medium text-[13.5px]",
    formFieldLabel: "text-[#020817] font-semibold text-[12.5px] tracking-wide",
    formFieldInput:
      "bg-white border border-gray-200 rounded-xl text-[#020817] h-11 px-3.5 focus:!border-[#4285f4] focus:!ring-2 focus:!ring-[#4285f4]/15 transition-shadow",
    formFieldInputShowPasswordButton: "text-[#8e9196] hover:text-[#4285f4]",
    formButtonPrimary:
      "bg-gradient-to-r from-[#4285f4] to-[#3570d4] hover:from-[#3570d4] hover:to-[#2a5fc0] text-white font-semibold rounded-xl h-11 shadow-[0_8px_20px_-8px_rgba(66,133,244,0.55)] transition-all",
    footerActionLink:
      "text-[#4285f4] hover:text-[#3570d4] font-semibold underline-offset-2 hover:underline",
    footerActionText: "text-[#8e9196] text-[13px]",
    footerAction: "",
    dividerLine: "bg-gray-200",
    dividerText:
      "text-[#8e9196] text-[11px] uppercase tracking-[0.12em] font-medium",
    identityPreviewEditButton: "text-[#4285f4]",
    formFieldSuccessText: "text-emerald-600 text-xs",
    alertText: "text-rose-700 text-xs",
    alert: "bg-rose-50 border border-rose-100 rounded-xl",
    otpCodeFieldInput:
      "bg-white border border-gray-200 rounded-lg text-[#020817] focus:border-[#4285f4]",
    formFieldRow: "",
    logoBox: "mb-2 mt-1 flex justify-center",
    logoImage: "h-[26px] w-auto",
    main: "gap-4",
  },
};

function SignInPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#f1f0fb4d] px-4 py-10">
      <SignIn
        routing="path"
        path={`${basePath}/sign-in`}
        signUpUrl={`${basePath}/sign-up`}
        afterSignInUrl={`${basePath}/dashboard`}
      />
    </div>
  );
}

function SignUpPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#f1f0fb4d] px-4 py-10">
      <SignUp
        routing="path"
        path={`${basePath}/sign-up`}
        signInUrl={`${basePath}/sign-in`}
        afterSignUpUrl={`${basePath}/dashboard`}
      />
    </div>
  );
}

function SignedOutDashboardGate() {
  const { openSignIn } = useClerk();
  useEffect(() => {
    openSignIn({ afterSignInUrl: `${basePath}/dashboard` });
  }, [openSignIn]);
  return <Redirect to="/" />;
}

function ProtectedDashboard() {
  return (
    <>
      <Show when="signed-in">
        <Dashboard />
      </Show>
      <Show when="signed-out">
        <SignedOutDashboardGate />
      </Show>
    </>
  );
}

function ClerkQueryClientCacheInvalidator() {
  const { addListener } = useClerk();
  const qc = useQueryClient();
  const prevUserIdRef = useRef<string | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = addListener(({ user }) => {
      const userId = user?.id ?? null;
      if (prevUserIdRef.current !== undefined && prevUserIdRef.current !== userId) {
        qc.clear();
      }
      prevUserIdRef.current = userId;
    });
    return unsubscribe;
  }, [addListener, qc]);

  return null;
}

function ClerkProviderWithRoutes() {
  const [, setLocation] = useLocation();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      proxyUrl={clerkProxyUrl}
      appearance={clerkAppearance}
      signInUrl={`${basePath}/sign-in`}
      signUpUrl={`${basePath}/sign-up`}
      localization={{
        signIn: {
          start: { title: "Welcome back", subtitle: "Sign in to manage your investments" },
        },
        signUp: {
          start: { title: "Create your SliceRaiser account", subtitle: "Start investing in minutes" },
        },
      }}
      routerPush={(to) => setLocation(stripBase(to))}
      routerReplace={(to) => setLocation(stripBase(to), { replace: true })}
    >
      <QueryClientProvider client={queryClient}>
        <ClerkQueryClientCacheInvalidator />
        <CookieConsent />
        <Switch>
          <Route path="/sign-in/*?" component={SignInPage} />
          <Route path="/sign-up/*?" component={SignUpPage} />
          <Route path="/" component={Home} />
          <Route>
            <Layout>
              <Switch>
                <Route path="/opportunities" component={Opportunities} />
                <Route path="/opportunities/:id" component={OpportunityDetail} />
                <Route path="/equity" component={Equity} />
                <Route path="/fixed-income" component={FixedIncome} />
                <Route path="/dashboard" component={ProtectedDashboard} />
                <Route path="/contact" component={Contact} />
                <Route path="/legal" component={Legal} />
                <Route path="/terms" component={Terms} />
                <Route path="/faq" component={Faq} />
                <Route path="/investor-relations" component={InvestorRelations} />
                <Route path="/ir" component={InvestorRelations} />
                <Route>
                  <div className="max-w-3xl mx-auto px-6 py-20 text-center">
                    <h1 className="text-3xl font-bold text-[#020817] mb-3">Page not found</h1>
                    <p className="text-[#8e9196]">The page you're looking for doesn't exist.</p>
                  </div>
                </Route>
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default function App() {
  return (
    <WouterRouter base={basePath}>
      <ClerkProviderWithRoutes />
    </WouterRouter>
  );
}
