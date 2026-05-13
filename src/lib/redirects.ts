import { EXTERNAL_URLS } from "@/global";

function redirectTo(url: string): void {
  if (typeof window === "undefined") return;
  window.location.href = url;
}

export function goToAccounts(): void {
  redirectTo(EXTERNAL_URLS.accounts);
}

export function goToPlay(): void {
  redirectTo(EXTERNAL_URLS.play);
}

export function goToShop(): void {
  redirectTo(EXTERNAL_URLS.shop);
}

export function goToCodex(): void {
  redirectTo(EXTERNAL_URLS.codex);
}

export function goToCampaign(slug: string): void {
  redirectTo(`${EXTERNAL_URLS.play}/${slug}`);
}

export function goToProduct(slug: string): void {
  redirectTo(`${EXTERNAL_URLS.shop}/${slug}`);
}

export function goToBlog(slug: string): void {
  redirectTo(`${EXTERNAL_URLS.codex}/${slug}`);
}

export function goToLogin(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("open-login"));
}

export function goToForgePass(): void {
  redirectTo(EXTERNAL_URLS.accounts);
}

export function openExternal(url: string): void {
  redirectTo(url);
}