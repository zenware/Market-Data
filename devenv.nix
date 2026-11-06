{ pkgs, config, ... }:

{
  languages.javascript.enable = true;
  languages.javascript.package = pkgs.nodejs_24;
  languages.javascript.npm.enable = true;
  languages.javascript.npm.install.enable = true;

  services.postgres = {
    enable = true;
    listen_addresses = "127.0.0.1";
    port = 15432;
    initialDatabases = [
      {
        name = "marketdata_dev";
        user = "marketdata";
        pass = "marketdata";
        schema = ./schema/schema.sql;
      }
    ];
  };

  env.DATABASE_URL = "postgresql://marketdata:marketdata@${config.env.PGHOST}:${toString config.env.PGPORT}/marketdata_dev";

  processes = {
    api.exec = "npm run dev:api";
    web.exec = "npm run dev";
  };

  enterShell = ''
    echo "devenv: 'devenv up' starts Postgres, the API (:8080) and Vite (:3000)"
  '';
}
