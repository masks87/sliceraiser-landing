import { db } from "@workspace/db";
import * as schema from "@workspace/db";

const opportunities: Array<typeof schema.investmentOpportunitiesTable.$inferInsert> = [
  {
    title: "Marina Bay Residences — Penthouse Pool",
    description:
      "Co-invest in a fully-fitted penthouse with private rooftop pool overlooking Dubai Marina. Long-term lease secured with a 5-star hospitality operator providing fully managed short-stay income.",
    location: "Dubai Marina, UAE",
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
    assetType: "Vineyard",
    incomeType: "Operating income",
    riskLevel: "Medium",
    expectedReturn: "10.80",
    minimumInvestment: "1000",
    targetAmount: "1950000",
    fundedAmount: "780000",
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
