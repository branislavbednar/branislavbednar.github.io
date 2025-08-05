export type SingleExperience = {
  name: string;
  logoUrl: string;
  totalPeriod: string;
  roles: Role[];
}

export type Role = {
  title: string;
  rolePeriod: string;
  description: string;
}
