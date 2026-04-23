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
import Home from "@/pages/Home";
import Opportunities from "@/pages/Opportunities";
import OpportunityDetail from "@/pages/OpportunityDetail";
import Dashboard from "@/pages/Dashboard";
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
    cardBox: "bg-white rounded-2xl w-[440px] max-w-full overflow-hidden shadow-xl border border-gray-100",
    card: "!shadow-none !border-0 !bg-transparent !rounded-none",
    footer: "!shadow-none !border-0 !bg-transparent !rounded-none",
    headerTitle: "text-[#020817] font-bold text-2xl",
    headerSubtitle: "text-[#8e9196] text-sm",
    socialButtonsBlockButton:
      "border border-gray-200 hover:bg-[#f1f0fb4d] text-[#020817] rounded-xl",
    socialButtonsBlockButtonText: "text-[#020817] font-medium text-sm",
    formFieldLabel: "text-[#020817] font-medium text-sm",
    formFieldInput:
      "bg-white border border-gray-200 rounded-xl text-[#020817] focus:border-[#4285f4]",
    formButtonPrimary:
      "bg-[#4285f4] hover:bg-[#3570d4] text-white font-medium rounded-xl shadow-none",
    footerActionLink: "text-[#4285f4] hover:text-[#3570d4] font-medium",
    footerActionText: "text-[#8e9196]",
    footerAction: "",
    dividerLine: "bg-gray-200",
    dividerText: "text-[#8e9196] text-xs",
    identityPreviewEditButton: "text-[#4285f4]",
    formFieldSuccessText: "text-emerald-600 text-xs",
    alertText: "text-rose-700 text-xs",
    alert: "bg-rose-50 border border-rose-100 rounded-xl",
    otpCodeFieldInput:
      "bg-white border border-gray-200 rounded-lg text-[#020817] focus:border-[#4285f4]",
    formFieldRow: "",
    logoBox: "mb-2",
    logoImage: "h-7 w-auto",
    main: "",
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

function ProtectedDashboard() {
  return (
    <>
      <Show when="signed-in">
        <Dashboard />
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
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
        <Switch>
          <Route path="/sign-in/*?" component={SignInPage} />
          <Route path="/sign-up/*?" component={SignUpPage} />
          <Route>
            <Layout>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/opportunities" component={Opportunities} />
                <Route path="/opportunities/:id" component={OpportunityDetail} />
                <Route path="/dashboard" component={ProtectedDashboard} />
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
