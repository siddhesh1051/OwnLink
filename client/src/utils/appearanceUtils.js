// Font mapping
export const getFontClass = (fontName) => {
  const fontMap = {
    "Inter": "font-inter",
    "Roboto": "font-roboto", 
    "Poppins": "font-poppins",
    "Montserrat": "font-montserrat",
    "Open Sans": "font-opensans",
    "Lato": "font-lato",
    "Nunito": "font-nunito",
    "Source Sans Pro": "font-sourcesans",
    "Raleway": "font-raleway",
    "Playfair Display": "font-playfair",
    "Oswald": "font-oswald",
    "Merriweather": "font-merriweather"
  };
  
  return fontMap[fontName] || "font-inter";
};

// Button shape mapping
export const getButtonShapeClass = (shapeName) => {
  const shapeMap = {
    "rounded": "rounded-xl",
    "square": "rounded-none",
    "pill": "rounded-full",
    "soft": "rounded-lg",
    "sharp": "rounded-sm",
    "extra-rounded": "rounded-3xl"
  };
  
  return shapeMap[shapeName] || "rounded-xl";
};

// Get font family for inline styles
export const getFontFamily = (fontName) => {
  const fontFamilyMap = {
    "Inter": "Inter, sans-serif",
    "Roboto": "Roboto, sans-serif",
    "Poppins": "Poppins, sans-serif", 
    "Montserrat": "Montserrat, sans-serif",
    "Open Sans": "Open Sans, sans-serif",
    "Lato": "Lato, sans-serif",
    "Nunito": "Nunito, sans-serif",
    "Source Sans Pro": "Source Sans Pro, sans-serif",
    "Raleway": "Raleway, sans-serif",
    "Playfair Display": "Playfair Display, serif",
    "Oswald": "Oswald, sans-serif",
    "Merriweather": "Merriweather, serif"
  };
  
  return fontFamilyMap[fontName] || "Inter, sans-serif";
};