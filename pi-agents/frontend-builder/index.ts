// Frontend Builder Agent (Tier 3)
// Toma blueprint + copy y genera HTML/CSS.

export interface FrontendBuilderInput {
  blueprint: string;
  copy: string;
}

export interface FrontendBuilderOutput {
  htmlPath: string;
  cssPath: string;
}

export async function runFrontendBuilder(input: FrontendBuilderInput): Promise<FrontendBuilderOutput> {
  // TODO: Generar HTML y CSS
  return {
    htmlPath: 'output/landing/index.html',
    cssPath: 'output/landing/styles.css',
  };
}
