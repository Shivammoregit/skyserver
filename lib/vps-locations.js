import { cache } from "react";
import { getPool, hasDatabaseConfig } from "@/lib/db";

async function runQuery(query, params = []) {
  if (!hasDatabaseConfig()) {
    return [];
  }

  const [rows] = await getPool().execute(query, params);
  return rows;
}

export const getAllCitySlugs = cache(async function getAllCitySlugs() {
  try {
    const rows = await runQuery("SELECT city_slug FROM cities WHERE city_slug IS NOT NULL AND city_slug <> ''");
    return rows.map((row) => row.city_slug).filter(Boolean);
  } catch {
    return [];
  }
});

export const getAllLocationSlugs = cache(async function getAllLocationSlugs() {
  try {
    const [cityRows, stateRows] = await Promise.all([
      runQuery("SELECT city_slug AS slug FROM cities WHERE city_slug IS NOT NULL AND city_slug <> ''"),
      runQuery("SELECT state_slug AS slug FROM states WHERE state_slug IS NOT NULL AND state_slug <> ''")
    ]);

    return [...cityRows, ...stateRows]
      .map((row) => row.slug)
      .filter(Boolean)
      .filter((slug, index, all) => all.indexOf(slug) === index);
  } catch {
    return [];
  }
});

export const getLocationBySlug = cache(async function getLocationBySlug(slug) {
  if (!slug || !hasDatabaseConfig()) {
    return null;
  }

  try {
    const cityRows = await runQuery(
      `SELECT c.city_name, c.city_slug, s.state_name, s.state_slug
       FROM cities c
       JOIN states s ON s.id = c.state_id
       WHERE c.city_slug = ?`,
      [slug]
    );

    if (cityRows.length > 0) {
      const city = cityRows[0];
      return {
        type: "city",
        slug: city.city_slug,
        locationName: `${city.city_name}, ${city.state_name}`,
        cityName: city.city_name,
        stateName: city.state_name,
        stateSlug: city.state_slug
      };
    }

    const stateRows = await runQuery("SELECT state_name, state_slug FROM states WHERE state_slug = ?", [slug]);

    if (stateRows.length > 0) {
      const state = stateRows[0];
      return {
        type: "state",
        slug: state.state_slug,
        locationName: state.state_name,
        stateName: state.state_name,
        stateSlug: state.state_slug
      };
    }
  } catch {
    return null;
  }

  return null;
});
