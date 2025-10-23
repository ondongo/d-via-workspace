// Configuration des assets pour le design system
export const ASSETS_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://d-via-workspace-design-system-dvia.vercel.app' 
  : '';

export const getAssetUrl = (path: string): string => {
  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }
  
  // Si c'est un chemin relatif, ajouter la base URL
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${ASSETS_BASE_URL}${cleanPath}`;
};
