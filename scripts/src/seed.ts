import { db } from "@workspace/db";
import * as schema from "@workspace/db";

const opportunities: Array<typeof schema.investmentOpportunitiesTable.$inferInsert> = [
  {
    title: "Marina Bay Residences — Penthouse Pool",
    description:
      "Co-invest in a fully-fitted penthouse with private rooftop pool overlooking Dubai Marina. Long-term lease secured with a 5-star hospitality operator providing fully managed short-stay income.",
    location: "Dubai Marina, UAE",
    category: "Property",
    assetType: "Residential",
    incomeType: "Rental income",
    riskLevel: "Low",
    expectedReturn: "8.40",
    minimumInvestment: "500",
    targetAmount: "1850000",
    fundedAmount: "1390000",
    imageUrl: "/seed/1.jpg",
  },
  {
    title: "Palm Jumeirah Beachfront Villa",
    description:
      "Beachfront branded villa on the Palm with direct beach access. Fully furnished and managed by a global hospitality brand under a 7-year guaranteed-rent agreement.",
    location: "Palm Jumeirah, Dubai, UAE",
    category: "Property",
    assetType: "Residential",
    incomeType: "Rental income",
    riskLevel: "Medium",
    expectedReturn: "9.10",
    minimumInvestment: "1000",
    targetAmount: "3200000",
    fundedAmount: "2050000",
    imageUrl: "/seed/2.jpg",
  },
  {
    title: "Abu Dhabi Corniche Tower",
    description:
      "Pre-leased commercial floors in a Grade-A tower on Abu Dhabi's Corniche. Anchor tenants on 10-year leases provide a stable, inflation-linked yield.",
    location: "Corniche, Abu Dhabi, UAE",
    category: "Property",
    assetType: "Commercial",
    incomeType: "Rental income",
    riskLevel: "Low",
    expectedReturn: "7.20",
    minimumInvestment: "500",
    targetAmount: "5400000",
    fundedAmount: "4720000",
    imageUrl: "/seed/3.jpg",
  },
  {
    title: "Catalonia Coastal Villas",
    description:
      "Portfolio of three Mediterranean coastal villas near the Costa Brava. Operated as premium holiday rentals with strong summer occupancy and value-add renovation upside.",
    location: "Costa Brava, Spain",
    category: "Property",
    assetType: "Hospitality",
    incomeType: "Rental + appreciation",
    riskLevel: "Medium",
    expectedReturn: "11.50",
    minimumInvestment: "750",
    targetAmount: "2100000",
    fundedAmount: "880000",
    imageUrl: "/seed/4.jpg",
  },
  {
    title: "Madrid Salamanca Loft Block",
    description:
      "Four converted lofts in Madrid's Salamanca district. Fully renovated with energy-efficient retrofits, leased on multi-year corporate tenancies.",
    location: "Salamanca, Madrid, Spain",
    category: "Property",
    assetType: "Residential",
    incomeType: "Rental income",
    riskLevel: "Low",
    expectedReturn: "6.80",
    minimumInvestment: "500",
    targetAmount: "1450000",
    fundedAmount: "1280000",
    imageUrl: "/seed/5.jpg",
  },
  {
    title: "Provence Vineyard Estate",
    description:
      "Working vineyard estate in southern Provence with onsite cellar and tasting room. Income from wine production, agritourism stays, and event hosting.",
    location: "Provence, France",
    category: "Property",
    assetType: "Vineyard",
    incomeType: "Operating income",
    riskLevel: "High",
    expectedReturn: "13.20",
    minimumInvestment: "1500",
    targetAmount: "2750000",
    fundedAmount: "1100000",
    imageUrl: "/seed/6.jpg",
  },
  {
    title: "Paris Haussmann Apartment Block",
    description:
      "Classic 6-floor Haussmannian building near Champs-Élysées. Long-term residential leases with planned envelope renovation to capture central-Paris rental premium.",
    location: "8th Arrondissement, Paris, France",
    category: "Property",
    assetType: "Residential",
    incomeType: "Rental income",
    riskLevel: "Low",
    expectedReturn: "5.90",
    minimumInvestment: "500",
    targetAmount: "6800000",
    fundedAmount: "5650000",
    imageUrl: "/seed/7.jpg",
  },
  {
    title: "Tuscan Heritage Hotel",
    description:
      "26-room boutique heritage hotel set in a restored 17th-century Tuscan villa. Operated by a regional luxury hospitality brand with a multi-year management contract.",
    location: "Chianti, Tuscany, Italy",
    category: "Property",
    assetType: "Hospitality",
    incomeType: "Operating income",
    riskLevel: "Medium",
    expectedReturn: "10.40",
    minimumInvestment: "750",
    targetAmount: "3900000",
    fundedAmount: "1950000",
    imageUrl: "/seed/8.jpg",
  },
  {
    title: "Milan Porta Nuova Office",
    description:
      "Whole floor in a Grade-A LEED Platinum tower in Milan's Porta Nuova business district. Single-tenant lease with annual indexation.",
    location: "Porta Nuova, Milan, Italy",
    category: "Property",
    assetType: "Commercial",
    incomeType: "Rental income",
    riskLevel: "Low",
    expectedReturn: "6.40",
    minimumInvestment: "500",
    targetAmount: "4200000",
    fundedAmount: "3650000",
    imageUrl: "/seed/9.jpg",
  },
  {
    title: "Lisbon Quinta Wine & Stays",
    description:
      "Historic quinta near Lisbon with vineyard, boutique guest stays and event venue. Multiple income streams across hospitality, viticulture and agritourism.",
    location: "Sintra, Portugal",
    category: "Property",
    assetType: "Vineyard",
    incomeType: "Operating income",
    riskLevel: "Medium",
    expectedReturn: "10.80",
    minimumInvestment: "1000",
    targetAmount: "1950000",
    fundedAmount: "780000",
    imageUrl: "/seed/10.jpg",
  },

  // ── Equity Investments ──────────────────────────────────────────────
  {
    title: "MENA Cloud Infrastructure — Series B",
    description:
      "Equity stake in a fast-growing regional cloud infrastructure operator powering AI workloads across the GCC. Co-investment alongside tier-one regional VCs at the Series B round.",
    location: "Riyadh, Saudi Arabia",
    category: "Equity",
    assetType: "Venture Capital",
    incomeType: "Capital appreciation",
    riskLevel: "High",
    expectedReturn: "22.50",
    minimumInvestment: "5000",
    targetAmount: "8500000",
    fundedAmount: "3200000",
    imageUrl: "/seed/1.jpg",
  },
  {
    title: "Iberia Renewables Holdings",
    description:
      "Private-equity participation in a portfolio of operating solar and onshore wind assets across Spain and Portugal with long-term offtake contracts and indexed cash flows.",
    location: "Madrid, Spain",
    category: "Equity",
    assetType: "Private Equity",
    incomeType: "Dividend + appreciation",
    riskLevel: "Medium",
    expectedReturn: "14.80",
    minimumInvestment: "2500",
    targetAmount: "12000000",
    fundedAmount: "7400000",
    imageUrl: "/seed/3.jpg",
  },
  {
    title: "Gulf Logistics Buyout Vehicle",
    description:
      "Buyout-stage equity in a regional last-mile logistics operator. Strategy combines operational improvements with bolt-on acquisitions across the UAE and Saudi corridors.",
    location: "Dubai, UAE",
    category: "Equity",
    assetType: "Private Equity",
    incomeType: "Capital appreciation",
    riskLevel: "Medium",
    expectedReturn: "17.20",
    minimumInvestment: "5000",
    targetAmount: "9500000",
    fundedAmount: "5100000",
    imageUrl: "/seed/9.jpg",
  },
  {
    title: "Paris Fintech Growth Fund",
    description:
      "Late-stage growth equity vehicle backing European fintech leaders in payments, embedded finance, and treasury automation. 5-7 year hold with secondary liquidity windows.",
    location: "Paris, France",
    category: "Equity",
    assetType: "Growth Equity",
    incomeType: "Capital appreciation",
    riskLevel: "High",
    expectedReturn: "20.10",
    minimumInvestment: "10000",
    targetAmount: "15000000",
    fundedAmount: "9300000",
    imageUrl: "/seed/7.jpg",
  },
  {
    title: "Italian Specialty Foods Roll-up",
    description:
      "Equity in a roll-up of artisanal Italian specialty food brands with European distribution. Targeting EBITDA expansion via shared operations and exit to a strategic acquirer.",
    location: "Milan, Italy",
    category: "Equity",
    assetType: "Private Equity",
    incomeType: "Capital appreciation",
    riskLevel: "Medium",
    expectedReturn: "15.40",
    minimumInvestment: "2500",
    targetAmount: "6800000",
    fundedAmount: "2100000",
    imageUrl: "/seed/8.jpg",
  },

  // ── Fixed Income ────────────────────────────────────────────────────
  {
    title: "UAE Sovereign Sukuk — 5Y Tranche",
    description:
      "Senior unsecured 5-year sukuk issuance backed by UAE sovereign-linked entity. Investment-grade rating with semi-annual profit distributions in USD.",
    location: "Abu Dhabi, UAE",
    category: "Fixed Income",
    assetType: "Sukuk",
    incomeType: "Coupon income",
    riskLevel: "Low",
    expectedReturn: "5.40",
    minimumInvestment: "1000",
    targetAmount: "5000000",
    fundedAmount: "4150000",
    imageUrl: "/seed/3.jpg",
  },
  {
    title: "Saudi Infrastructure Bond — 7Y",
    description:
      "Senior secured bond financing a strategic transport infrastructure project. 7-year tenor with quarterly coupons and step-up features tied to project milestones.",
    location: "Jeddah, Saudi Arabia",
    category: "Fixed Income",
    assetType: "Corporate Bond",
    incomeType: "Coupon income",
    riskLevel: "Low",
    expectedReturn: "6.10",
    minimumInvestment: "1000",
    targetAmount: "7500000",
    fundedAmount: "5800000",
    imageUrl: "/seed/9.jpg",
  },
  {
    title: "European Real-Estate Senior Note",
    description:
      "Senior secured note collateralised by a portfolio of prime French and Italian commercial properties. Floating rate over EURIBOR with 4-year bullet maturity.",
    location: "Paris, France",
    category: "Fixed Income",
    assetType: "Senior Note",
    incomeType: "Coupon income",
    riskLevel: "Medium",
    expectedReturn: "7.30",
    minimumInvestment: "2500",
    targetAmount: "6200000",
    fundedAmount: "4800000",
    imageUrl: "/seed/7.jpg",
  },
  {
    title: "Trade Finance Receivables Note",
    description:
      "Short-duration receivables note diversified across investment-grade corporate trade finance facilities in MENA. 12-month rolling tenor with monthly distributions.",
    location: "Dubai, UAE",
    category: "Fixed Income",
    assetType: "Receivables Note",
    incomeType: "Coupon income",
    riskLevel: "Medium",
    expectedReturn: "8.20",
    minimumInvestment: "1000",
    targetAmount: "3500000",
    fundedAmount: "1900000",
    imageUrl: "/seed/2.jpg",
  },
  {
    title: "Iberian Renewables Mezzanine",
    description:
      "Mezzanine debt facility for a portfolio of operating Iberian renewable energy assets. Subordinated to senior bank debt with attractive cash yield and modest equity kicker.",
    location: "Lisbon, Portugal",
    category: "Fixed Income",
    assetType: "Mezzanine Debt",
    incomeType: "Coupon income",
    riskLevel: "High",
    expectedReturn: "10.50",
    minimumInvestment: "5000",
    targetAmount: "4400000",
    fundedAmount: "1500000",
    imageUrl: "/seed/10.jpg",
  },
];

async function main() {
  console.log(`Seeding ${opportunities.length} investment opportunities...`);

  const existing = await db.select().from(schema.investmentOpportunitiesTable);
  if (existing.length > 0) {
    console.log(
      `Found ${existing.length} existing opportunities — clearing and re-seeding.`,
    );
    await db.delete(schema.investmentOpportunitiesTable);
  }

  const inserted = await db
    .insert(schema.investmentOpportunitiesTable)
    .values(opportunities)
    .returning({ id: schema.investmentOpportunitiesTable.id, title: schema.investmentOpportunitiesTable.title });

  for (const row of inserted) {
    console.log(`  ✓ #${row.id} — ${row.title}`);
  }

  console.log("Seed complete.");
  process.exit(0);
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
