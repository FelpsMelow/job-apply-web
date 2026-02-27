type Env = 'local' | 'development' | 'production';

const APP_ENV = process.env.APP_ENV as Env;

const ENV_CONFIG = {
    local: {
        apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL!,
        ingestBaseUrl: process.env.NEXT_PUBLIC_MS_INGEST_BASE_URL!
    },
    development: {
        apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL!,
        ingestBaseUrl: process.env.NEXT_PUBLIC_MS_INGEST_BASE_URL!
    },
    production: {
        apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL!,
        ingestBaseUrl: process.env.NEXT_PUBLIC_MS_INGEST_BASE_URL!
    },
};

export const config = ENV_CONFIG[APP_ENV || 'local'];
