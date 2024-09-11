import { ENV } from "@/utils";

export class Brand {
  async getAll() {
    try {
      const sort = "sort=order:asc";
      const populate = "populate=icon";

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BRAND}?${populate}&${sort}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getBySlug(slug) {
    try {
      const filters = `filters[slug][$eq]=${slug}`;
      const url = `${ENV.SERVER_API_URL}/${ENV.ENDPOINTS.BRAND}?${filters}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result.data[0];
    } catch (error) {
      throw error;
    }
  }
}
