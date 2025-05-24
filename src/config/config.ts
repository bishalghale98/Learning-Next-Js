interface IConfig{
    apiUrl: string | undefined;
}

const config:IConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
};

export default config;
