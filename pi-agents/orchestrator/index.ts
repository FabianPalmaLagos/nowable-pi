// Orchestrator Agent (Tier 1)
// Recibe el brief del usuario y orquesta el ciclo principal entre agentes.
// Solo sintetiza y enruta, no modifica archivos de salida directamente.

export interface OrchestratorInput {
  brief: string;
  userId?: string;
}

export interface OrchestratorOutput {
  landingPath: string;
  summary: string;
  errors?: string[];
}

export async function runOrchestrator(input: OrchestratorInput): Promise<OrchestratorOutput> {
  // TODO: Enviar input a landing-lead y procesar respuesta completa.
  return {
    landingPath: '',
    summary: 'stub',
  };
}
