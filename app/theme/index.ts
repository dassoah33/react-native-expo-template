// app/theme/index.ts
import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

export const theme = {
    colors,
    typography,
    spacing,
    // Définir les styles de navigation ici
    navigation: {
      header: {
        height: 120,
        backgroundColor: colors.primary,
        titleColor: colors.white,
        titleSize: typography.sizes.xl,
      },
      tabBar: {
        backgroundColor: colors.white,
        activeColor: colors.primary,
        inactiveColor: colors.mediumGray,
        borderColor: colors.lightGray,
      },
    },
  };
  
  export type Theme = typeof theme;
  export { colors, typography, spacing };
