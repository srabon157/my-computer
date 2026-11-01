import dotenv from 'dotenv';
dotenv.config();

export const DELIVERY_CONFIG = {
  dhaka: Number(process.env.DHAKA_DELIVERY_CHARGE) || 120,
  outsideDhaka: Number(process.env.OUTSIDE_DHAKA_DELIVERY_CHARGE) || 200,
};

/**
 * Calculates delivery charge based on district name.
 * Dhaka = 120 BDT, Outside Dhaka = 200 BDT
 */
export function getDeliveryCharge(district: string): number {
  if (!district) return DELIVERY_CONFIG.outsideDhaka;
  const cleanDistrict = district.trim().toLowerCase();
  if (cleanDistrict === 'dhaka' || cleanDistrict === 'ঢাকা') {
    return DELIVERY_CONFIG.dhaka;
  }
  return DELIVERY_CONFIG.outsideDhaka;
}

