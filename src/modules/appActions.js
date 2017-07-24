export const SAVE_OLDLOCATION = 'SAVE_OLDLOCATION';

export function saveoldLocation(location) {
  return { type: SAVE_OLDLOCATION, location };
};