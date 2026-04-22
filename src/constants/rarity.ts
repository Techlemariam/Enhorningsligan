/**
 * Enhörningsligan Rarity Registry
 * 
 * Maps "Unicorn Magic" levels to the Brotherhood Rarity Protocol.
 * This ensures cross-project design consistency while maintaining the magic aesthetic.
 */

export const RARITY_COLORS = {
  POOR: 'var(--color-rarity-poor)',         // N/A for Ligan
  COMMON: 'var(--color-rarity-common)',     // Default
  UNCOMMON: 'var(--color-rarity-uncommon)', // Dust Cyan (Låg Magic)
  RARE: 'var(--color-rarity-rare)',         // Ethereal Purple (Medel Magic)
  EPIC: 'var(--color-rarity-epic)',         // Magic Pink (Hög Magic)
  LEGENDARY: 'var(--color-rarity-legendary)', // Glow Gold (Epic Loot)
  GOLD: 'var(--color-rarity-gold)',         // Metadata / UI emphasis
} as const;

export type RarityTier = keyof typeof RARITY_COLORS;

/**
 * Mapping Ligan-specific types to Rarity Tiers
 */
export const MAGIC_TO_RARITY: Record<string, RarityTier> = {
  'Låg': 'UNCOMMON',
  'Medel': 'RARE',
  'Hög': 'EPIC',
  'Vuxen': 'RARE',
  'Familj': 'EPIC',
  'Epic Loot': 'LEGENDARY',
};
