import { notFound } from "next/navigation";
import LegacyShell from "@/components/LegacyShell";
import { getLegacyPage, getLegacyRoutes, hasLegacyRoute } from "@/lib/legacy-site";

export function generateStaticParams() {
  return getLegacyRoutes()
    .filter((routeKey) => routeKey.length > 0)
    .map((routeKey) => ({ slug: routeKey.split("/") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const routeKey = slug.join("/");

  if (!hasLegacyRoute(routeKey)) {
    return {};
  }

  const page = getLegacyPage(routeKey);
  return {
    title: {
      absolute: page.title
    },
    description: page.description,
    alternates: page.canonical ? { canonical: page.canonical } : undefined
  };
}

export default async function LegacyRoutePage({ params }) {
  const { slug } = await params;
  const routeKey = slug.join("/");

  if (!hasLegacyRoute(routeKey)) {
    notFound();
  }

  const page = getLegacyPage(routeKey);
  return <LegacyShell contentHtml={page.html} scripts={page.scripts} />;
}
