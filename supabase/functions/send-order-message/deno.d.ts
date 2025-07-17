declare namespace Deno {
  namespace env {
    function get(key: string): string | undefined;
  }
}

declare module "https://deno.land/std@0.190.0/http/server.ts" {
  function serve(handler: (request: Request) => Response | Promise<Response>): Promise<void>;
}