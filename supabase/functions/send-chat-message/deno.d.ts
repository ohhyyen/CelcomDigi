declare namespace Deno {
  namespace env {
    function get(key: string): string | undefined;
  }
}

declare module "https://deno.land/std@0.190.0/http/server.ts" {
  function serve(handler: (request: Request) => Response | Promise<Response>): Promise<void>;
}

declare module "https://esm.sh/@supabase/supabase-js@2.45.0" {
  // Minimal declaration to satisfy TypeScript for createClient
  export function createClient(supabaseUrl: string, supabaseKey: string, options?: any): any;
}