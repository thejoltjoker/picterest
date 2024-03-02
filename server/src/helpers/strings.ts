import crypto from "crypto";

export const sha1digest = (data: string) => {
  return crypto.createHash("sha1").update(data).digest("hex");
};
