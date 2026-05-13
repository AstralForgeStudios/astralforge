// src/types/user.ts
import type { UserRole } from "@/global";

export interface User {
  id: string;
  email: string;
  username: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface UserProfile {
  userId: string;
  displayName?: string;
  bio?: string;
  avatarUrl?: string;
  website?: string;
  location?: string;
}

export interface Session {
  user: User;
  token: string;
  refreshToken?: string;
  expiresAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  username: string;
  password: string;
}

export interface RefreshTokenPayload {
  refreshToken: string;
}

export interface ForgePassUser extends User {
  provider: "forge-pass";
  providerId: string;
}

export interface Permissions {
  canAccessAdmin: boolean;
  canPublish: boolean;
  canEditContent: boolean;
  canManageUsers: boolean;
  canManageMedia: boolean;
}

export interface UserWithPermissions extends User {
  permissions: Permissions;
}

export interface AuthResponse {
  success: boolean;
  session?: Session;
  error?: string;
}

export interface UserResponse {
  success: boolean;
  user?: User;
  error?: string;
}