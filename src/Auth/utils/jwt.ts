type JwtPayload = {
    exp?: number; // timestamp en segundos
    sub?: string;
    email?: string;
    uid?: string;
    [key: string]: unknown;
};

export const decodeToken = (token: string): JwtPayload | null => {
    try {
        const payloadBase64 = token.split(".")[1];
        if (!payloadBase64) return null;

        const normalized = payloadBase64.replace(/-/g, "+").replace(/_/g, "/");
        const decoded = atob(normalized);
        return JSON.parse(decoded) as JwtPayload;
    } catch (err) {
        console.error("Error al decodificar el token:", err);
        return null;
    }
};

export const isTokenExpired = (token: string | null): boolean => {
    if (!token) return true;

    const payload = decodeToken(token);
    if (!payload || !payload.exp) return true;

    const nowInSeconds = Date.now() / 1000;
    return payload.exp < nowInSeconds;
};