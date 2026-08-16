import { CreatorProfile } from "./profile";

export function verifyCreator(
  creator: CreatorProfile
): CreatorProfile {

  return {
    ...creator,
    verified: true
  };
}

export function isVerified(
  creator: CreatorProfile
): boolean {
  return creator.verified;
}
