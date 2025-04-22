import { Property } from 'types/property';

export const filterProperties = (
  properties: Property[],
  roomFilter: string | null
): Property[] => {
  if (!roomFilter) return properties;

  return properties.filter((property) => {
    const rooms = Number(property.num_rooms);

    if (roomFilter === '4') {
      return rooms >= 4;
    }

    return rooms === Number(roomFilter);
  });
};
