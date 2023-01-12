declare module API {
  type NamedAPIResource = {
    name: string;
    url: string;
  };

  type NamedAPIResourceList = {
    count: number;
    next: string;
    previous: string;
    results: NamedAPIResource[];
  };
}
