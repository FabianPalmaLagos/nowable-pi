// Content Writer Agent (Tier 3)
// Genera copy textual para la landing page.

export interface ContentWriterInput {
  brief: string;
  blueprint: string;
}

export interface ContentWriterOutput {
  copy: string;
}

export async function runContentWriter(input: ContentWriterInput): Promise<ContentWriterOutput> {
  // TODO: generar todos los textos de la landing
  return {
    copy: 'stub-copy for landing',
  };
}
