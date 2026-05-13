import type {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
  Session,
  User
} from "@/types/user";

const AUTH_STORAGE_KEY = "astralforge.session";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function saveSession(session: Session): void {
  if (!isBrowser()) return;
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
}

export function getSession(): Session | null {
  if (!isBrowser()) return null;

  const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as Session;
  } catch {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function clearSession(): void {
  if (!isBrowser()) return;
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function getCurrentUser(): User | null {
  const session = getSession();
  return session?.user ?? null;
}

export function isAuthenticated(): boolean {
  const session = getSession();
  if (!session) return false;

  const expiresAt = new Date(session.expiresAt).getTime();
  return Date.now() < expiresAt;
}

/**
 * LOGIN (mock)
 */
export async function login(payload: LoginPayload): Promise<AuthResponse> {
  if (!payload.email || !payload.password) {
    return {
      success: false,
      error: "Email and password are required."
    };
  }

  const mockUser: User = {
    id: "user_demo_001",
    email: payload.email,
    username: payload.email.includes("@")
      ? payload.email.split("@")[0]
      : payload.email,
    role: "player",
    createdAt: new Date().toISOString()
  };

  const session: Session = {
    user: mockUser,
    token: "mock-token",
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString()
  };

  saveSession(session);

  return {
    success: true,
    session
  };
}

/**
 * REGISTER (mock)
 */
export async function register(
  payload: RegisterPayload
): Promise<AuthResponse> {
  if (!payload.email || !payload.username || !payload.password) {
    return {
      success: false,
      error: "Email, username, and password are required."
    };
  }

  const mockUser: User = {
    id: "user_demo_002",
    email: payload.email,
    username: payload.username,
    role: "player",
    createdAt: new Date().toISOString()
  };

  const session: Session = {
    user: mockUser,
    token: "mock-token",
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString()
  };

  saveSession(session);

  return {
    success: true,
    session
  };
}

export function logout(): void {
  clearSession();
}

export function getForgePassUrl(): string {
  return (
    process.env.NEXT_PUBLIC_ACCOUNTS_URL ||
    "https://accounts.astralforge.studio"
  );
}