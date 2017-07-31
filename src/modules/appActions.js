export const SAVE_OLDLOCATION = 'SAVE_OLDLOCATION';
export const CHANGE_DIRECTON = 'CHANGE_DIRECTON';

export function saveoldLocation(location) {
  return { type: SAVE_OLDLOCATION, location };
};

export function changeDirection(data) {
  return { type: CHANGE_DIRECTON, data };
}
