import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

export const rateLimiter = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(2, "10 s"),
});

export async function checkRateLimitByIp() {
  const headersList = await headers();

  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");

  const ip = forwardedFor?.split(",")[0]?.trim() || realIp || "127.0.0.1";

  return await rateLimiter.limit(ip);
}
