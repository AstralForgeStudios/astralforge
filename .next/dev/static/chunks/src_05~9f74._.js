(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/global.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/global.ts
__turbopack_context__.s([
    "APP_DOMAIN",
    ()=>APP_DOMAIN,
    "APP_NAME",
    ()=>APP_NAME,
    "EXTERNAL_URLS",
    ()=>EXTERNAL_URLS,
    "SITE_METADATA",
    ()=>SITE_METADATA,
    "SITE_URLS",
    ()=>SITE_URLS,
    "SUBDOMAINS",
    ()=>SUBDOMAINS
]);
const APP_NAME = "AstralForge";
const APP_DOMAIN = "astralforge.studio";
const SUBDOMAINS = {
    main: APP_DOMAIN,
    accounts: "accounts.astralforge.studio",
    admin: "admin.astralforge.studio",
    api: "api.astralforge.studio",
    codex: "codex.astralforge.studio",
    mail: "mail.astralforge.studio",
    play: "play.astralforge.studio",
    shop: "shop.astralforge.studio"
};
const SITE_URLS = {
    home: "/",
    about: "/about",
    contact: "/contact",
    reviews: "/reviews",
    privacy: "/legal/privacy",
    terms: "/legal/tos"
};
const EXTERNAL_URLS = {
    accounts: `https://${SUBDOMAINS.accounts}`,
    admin: `https://${SUBDOMAINS.admin}`,
    api: `https://${SUBDOMAINS.api}`,
    codex: `https://${SUBDOMAINS.codex}`,
    mail: `https://${SUBDOMAINS.mail}`,
    play: `https://${SUBDOMAINS.play}`,
    shop: `https://${SUBDOMAINS.shop}`
};
const SITE_METADATA = {
    name: APP_NAME,
    domain: APP_DOMAIN,
    description: "AstralForge is a worldbuilding and tabletop experience studio."
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADMIN_NAV",
    ()=>ADMIN_NAV,
    "FOOTER_NAV",
    ()=>FOOTER_NAV,
    "MAIN_NAV",
    ()=>MAIN_NAV,
    "UTILITY_NAV",
    ()=>UTILITY_NAV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global.ts [app-client] (ecmascript)");
;
const MAIN_NAV = [
    {
        label: "Home",
        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_URLS"].home
    },
    {
        label: "Play",
        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTERNAL_URLS"].play,
        external: true
    },
    {
        label: "Codex",
        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTERNAL_URLS"].codex,
        external: true
    },
    {
        label: "Shop",
        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTERNAL_URLS"].shop,
        external: true
    }
];
const UTILITY_NAV = [
    {
        label: "Forge-Pass",
        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTERNAL_URLS"].accounts,
        external: true
    }
];
const FOOTER_NAV = {
    sections: [
        {
            title: "Explore",
            items: [
                {
                    label: "Play",
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTERNAL_URLS"].play,
                    external: true
                },
                {
                    label: "Codex",
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTERNAL_URLS"].codex,
                    external: true
                },
                {
                    label: "Shop",
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTERNAL_URLS"].shop,
                    external: true
                }
            ]
        },
        {
            title: "Company",
            items: [
                {
                    label: "About",
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_URLS"].about
                },
                {
                    label: "Contact",
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_URLS"].contact
                },
                {
                    label: "Reviews",
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_URLS"].reviews
                }
            ]
        },
        {
            title: "Legal",
            items: [
                {
                    label: "Privacy",
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_URLS"].privacy
                },
                {
                    label: "Terms",
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_URLS"].terms
                }
            ]
        }
    ]
};
const ADMIN_NAV = {
    items: [
        {
            label: "Dashboard",
            href: "/admin",
            requiresAuth: true,
            roles: [
                "admin",
                "owner"
            ]
        },
        {
            label: "Builder",
            href: "/admin/builder",
            requiresAuth: true,
            roles: [
                "admin",
                "owner"
            ]
        },
        {
            label: "Codex",
            href: "/admin/codex",
            requiresAuth: true,
            roles: [
                "admin",
                "owner"
            ]
        },
        {
            label: "Products",
            href: "/admin/products",
            requiresAuth: true,
            roles: [
                "admin",
                "owner"
            ]
        },
        {
            label: "Media",
            href: "/admin/media",
            requiresAuth: true,
            roles: [
                "admin",
                "owner"
            ]
        },
        {
            label: "Publish",
            href: "/admin/publish",
            requiresAuth: true,
            roles: [
                "admin",
                "owner"
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSession",
    ()=>clearSession,
    "getCurrentUser",
    ()=>getCurrentUser,
    "getForgePassUrl",
    ()=>getForgePassUrl,
    "getSession",
    ()=>getSession,
    "isAuthenticated",
    ()=>isAuthenticated,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "register",
    ()=>register,
    "saveSession",
    ()=>saveSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const AUTH_STORAGE_KEY = "astralforge.session";
function isBrowser() {
    return ("TURBOPACK compile-time value", "object") !== "undefined";
}
function saveSession(session) {
    if (!isBrowser()) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
}
function getSession() {
    if (!isBrowser()) //TURBOPACK unreachable
    ;
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch  {
        window.localStorage.removeItem(AUTH_STORAGE_KEY);
        return null;
    }
}
function clearSession() {
    if (!isBrowser()) //TURBOPACK unreachable
    ;
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
}
function getCurrentUser() {
    const session = getSession();
    return session?.user ?? null;
}
function isAuthenticated() {
    const session = getSession();
    if (!session) return false;
    const expiresAt = new Date(session.expiresAt).getTime();
    return Date.now() < expiresAt;
}
async function login(payload) {
    if (!payload.email || !payload.password) {
        return {
            success: false,
            error: "Email and password are required."
        };
    }
    const mockUser = {
        id: "user_demo_001",
        email: payload.email,
        username: payload.email.includes("@") ? payload.email.split("@")[0] : payload.email,
        role: "player",
        createdAt: new Date().toISOString()
    };
    const session = {
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
async function register(payload) {
    if (!payload.email || !payload.username || !payload.password) {
        return {
            success: false,
            error: "Email, username, and password are required."
        };
    }
    const mockUser = {
        id: "user_demo_002",
        email: payload.email,
        username: payload.username,
        role: "player",
        createdAt: new Date().toISOString()
    };
    const session = {
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
function logout() {
    clearSession();
}
function getForgePassUrl() {
    return ("TURBOPACK compile-time value", "http://accounts.localhost:3000") || "https://accounts.astralforge.studio";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/utils.ts
/**
 * General utility helpers
 */ // =========================
// Class Name Combiner
// =========================
__turbopack_context__.s([
    "capitalize",
    ()=>capitalize,
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate,
    "isBrowser",
    ()=>isBrowser,
    "safeJsonParse",
    ()=>safeJsonParse,
    "sleep",
    ()=>sleep,
    "slugify",
    ()=>slugify,
    "truncate",
    ()=>truncate
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}
function slugify(input) {
    return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
}
function capitalize(input) {
    if (!input) return "";
    return input.charAt(0).toUpperCase() + input.slice(1);
}
function truncate(input, length = 100) {
    if (input.length <= length) return input;
    return input.slice(0, length) + "...";
}
function safeJsonParse(value) {
    if (!value) return null;
    try {
        return JSON.parse(value);
    } catch  {
        return null;
    }
}
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
function isBrowser() {
    return ("TURBOPACK compile-time value", "object") !== "undefined";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function Button({ className, variant = "primary", size = "md", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center rounded-md font-medium transition-all", "focus:outline-none focus:ring-2 focus:ring-primary/50", "disabled:opacity-50 disabled:pointer-events-none", // Sizes
        {
            sm: "h-8 px-3 text-sm",
            md: "h-10 px-4 text-sm",
            lg: "h-12 px-6 text-base"
        }[size], // Variants
        {
            default: "bg-border text-foreground",
            primary: "bg-primary text-white hover:opacity-90",
            secondary: "bg-secondary text-black hover:opacity-90",
            accent: "bg-accent text-black hover:opacity-90",
            outline: "border border-border text-foreground hover:bg-border",
            ghost: "text-foreground hover:bg-border"
        }[variant], className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/auth/ForgePassLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ForgePassLink",
    ()=>ForgePassLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function ForgePassLink({ className, label = "Create Forge Pass", variant = "outline", size = "sm" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/forge-pass",
        className: "block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: variant,
            size: size,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/auth/ForgePassLink.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/auth/ForgePassLink.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = ForgePassLink;
var _c;
__turbopack_context__.k.register(_c, "ForgePassLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/auth/LoginForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginForm",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LoginForm({ onSuccess }) {
    _s();
    const [identifier, setIdentifier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [pass, setPass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleSubmit(event) {
        event.preventDefault();
        console.log("LOGIN SUBMIT FIRED");
        setError("");
        setLoading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["login"])({
                email: identifier,
                password: pass
            });
            console.log("LOGIN RESULT", result);
            console.log("LOCAL STORAGE", window.localStorage.getItem("astralforge.session"));
            if (!result.success) {
                setError(result.error || "Invalid login");
                return;
            }
            // Let LoginPopover handle closing + auth event
            onSuccess?.();
        } catch (err) {
            console.error("LOGIN ERROR", err);
            setError("Login failed. Check console.");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "login-user",
                        className: "block text-xs uppercase tracking-[0.18em] text-white/60",
                        children: "Email or Username"
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/LoginForm.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "login-user",
                        type: "text",
                        value: identifier,
                        onChange: (event)=>setIdentifier(event.target.value),
                        placeholder: "Enter email or username",
                        autoComplete: "username",
                        className: "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:ring-1 focus:ring-white/20",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/LoginForm.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/LoginForm.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "login-pass",
                        className: "block text-xs uppercase tracking-[0.18em] text-white/60",
                        children: "Password"
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/LoginForm.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "login-pass",
                        type: "password",
                        value: pass,
                        onChange: (event)=>setPass(event.target.value),
                        placeholder: "Enter your password",
                        autoComplete: "current-password",
                        className: "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:ring-1 focus:ring-white/20",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/LoginForm.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/LoginForm.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/forgot-password",
                        className: "text-xs text-[#cbb89a] hover:underline",
                        children: "Forgot password?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/LoginForm.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/10 disabled:opacity-50",
                        children: loading ? "Signing in..." : "Sign in"
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/LoginForm.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/LoginForm.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/auth/LoginForm.tsx",
                lineNumber: 111,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/auth/LoginForm.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(LoginForm, "aX6F8Abl7RUunVPqI/KRMUd+vI4=");
_c = LoginForm;
var _c;
__turbopack_context__.k.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/auth/LoginPopover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginPopover",
    ()=>LoginPopover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$LoginForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/LoginForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LoginPopover() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const popoverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginPopover.useEffect": ()=>{
            function openLogin() {
                console.log("OPEN LOGIN EVENT RECEIVED");
                setOpen(true);
            }
            function handleClickOutside(event) {
                if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                    setOpen(false);
                }
            }
            function handleEscape(event) {
                if (event.key === "Escape") {
                    setOpen(false);
                }
            }
            window.addEventListener("open-login", openLogin);
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscape);
            return ({
                "LoginPopover.useEffect": ()=>{
                    window.removeEventListener("open-login", openLogin);
                    document.removeEventListener("mousedown", handleClickOutside);
                    document.removeEventListener("keydown", handleEscape);
                }
            })["LoginPopover.useEffect"];
        }
    }["LoginPopover.useEffect"], []);
    function handleSuccess() {
        console.log("LOGIN SUCCESS CALLBACK");
        setOpen(false);
        window.dispatchEvent(new Event("auth:changed"));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: popoverRef,
        className: "relative z-[10000] inline-block text-left",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((value)=>!value),
                className: "rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10",
                children: "Login"
            }, void 0, false, {
                fileName: "[project]/src/components/auth/LoginPopover.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed right-8 top-20 z-[10001] w-[360px] rounded-2xl border border-white/10 bg-[#050505]/95 p-5 text-left shadow-2xl backdrop-blur-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.24em] text-[#cbb89a]",
                                        children: "AstralForge"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/LoginPopover.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-1 text-xl font-semibold text-white",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/LoginPopover.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/auth/LoginPopover.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setOpen(false),
                                className: "rounded-full border border-white/10 px-2 py-0.5 text-sm text-white/70 hover:bg-white/10",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/LoginPopover.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/auth/LoginPopover.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$LoginForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginForm"], {
                        onSuccess: handleSuccess
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/LoginPopover.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/forgot-password",
                                onClick: ()=>setOpen(false),
                                className: "text-[#cbb89a] hover:underline",
                                children: "Forgot password?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/LoginPopover.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/forge-pass",
                                onClick: ()=>setOpen(false),
                                className: "text-[#cbb89a] hover:underline",
                                children: "Create account"
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/LoginPopover.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/auth/LoginPopover.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/LoginPopover.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/auth/LoginPopover.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(LoginPopover, "MbU8ZDmnZAJHYN48bsS7xCBzV7A=");
_c = LoginPopover;
var _c;
__turbopack_context__.k.register(_c, "LoginPopover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/AccountMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountMenu",
    ()=>AccountMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$ForgePassLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/ForgePassLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$LoginPopover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/LoginPopover.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AccountMenu() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AccountMenu.useEffect": ()=>{
            function syncUser() {
                const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                console.log("SYNC USER", currentUser);
                setUser(currentUser);
            }
            syncUser();
            window.addEventListener("auth:changed", syncUser);
            window.addEventListener("storage", syncUser);
            return ({
                "AccountMenu.useEffect": ()=>{
                    window.removeEventListener("auth:changed", syncUser);
                    window.removeEventListener("storage", syncUser);
                }
            })["AccountMenu.useEffect"];
        }
    }["AccountMenu.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AccountMenu.useEffect": ()=>{
            function handleClickOutside(event) {
                if (menuRef.current && !menuRef.current.contains(event.target)) {
                    setOpen(false);
                }
            }
            function handleEscape(event) {
                if (event.key === "Escape") {
                    setOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscape);
            return ({
                "AccountMenu.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                    document.removeEventListener("keydown", handleEscape);
                }
            })["AccountMenu.useEffect"];
        }
    }["AccountMenu.useEffect"], []);
    function handleLogout() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"])();
        setUser(null);
        setOpen(false);
        window.dispatchEvent(new Event("auth:changed"));
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$LoginPopover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginPopover"], {}, void 0, false, {
                    fileName: "[project]/src/components/layout/AccountMenu.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$ForgePassLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForgePassLink"], {
                    label: "Forge Pass",
                    variant: "outline",
                    size: "sm"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/AccountMenu.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/AccountMenu.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this);
    }
    const accountName = user.username || user.email || "Account";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: menuRef,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((value)=>!value),
                className: "flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-sm text-white transition hover:bg-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold text-[#cbb89a]",
                        children: accountName.charAt(0).toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AccountMenu.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: accountName
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AccountMenu.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/AccountMenu.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-full z-[9999] mt-3 w-44 rounded-2xl border border-white/10 bg-[#050505]/95 p-2 shadow-2xl backdrop-blur-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://accounts.astralforge.studio",
                        className: "block rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white",
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AccountMenu.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://accounts.astralforge.studio/settings",
                        className: "block rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white",
                        children: "Settings"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AccountMenu.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleLogout,
                        className: "block w-full rounded-xl px-3 py-2 text-left text-sm text-white/80 transition hover:bg-white/10 hover:text-white",
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AccountMenu.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/AccountMenu.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/AccountMenu.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(AccountMenu, "by8CdcEj73EvpRRC9ijfqhjEZJs=");
_c = AccountMenu;
var _c;
__turbopack_context__.k.register(_c, "AccountMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AccountMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AccountMenu.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-[9999] w-full border-b border-white/10 bg-black/85 backdrop-blur",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-2 text-white transition-opacity hover:opacity-90",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/nav/Astral-Forge-nav.png",
                            alt: "AstralForge logo",
                            width: 32,
                            height: 32,
                            priority: true,
                            className: "h-8 w-8 object-contain"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-semibold tracking-wide transition-colors hover:text-[#cbb89a]",
                            children: "AstralForge"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden items-center gap-6 md:flex",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAIN_NAV"].map((item)=>item.external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-sm font-medium text-white transition-colors hover:text-[#cbb89a]",
                            children: item.label
                        }, item.label, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 33,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: "text-sm font-medium text-white transition-colors hover:text-[#cbb89a]",
                            children: item.label
                        }, item.label, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 43,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AccountMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountMenu"], {}, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 11,
        columnNumber: 4
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full border-t border-border px-4 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl space-y-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 sm:grid-cols-2 md:grid-cols-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_NAV"].sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold uppercase tracking-[0.15em] text-muted",
                                    children: section.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: section.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: item.external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: item.href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-sm text-foreground transition-colors hover:text-primary",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 23,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "text-sm text-foreground transition-colors hover:text-primary",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 32,
                                                columnNumber: 23
                                            }, this)
                                        }, item.label, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 21,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 19,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, section.title, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_NAME"],
                                ". All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_NAV"].bottom?.map((item)=>item.external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-xs text-muted transition-colors hover:text-primary",
                                    children: item.label
                                }, item.label, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "text-xs text-muted transition-colors hover:text-primary",
                                    children: item.label
                                }, item.label, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_05~9f74._.js.map