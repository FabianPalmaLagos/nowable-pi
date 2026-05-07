import type { ExtensionAPI, ExtensionCommandContext } from "@mariozechner/pi-coding-agent";

interface AgentResult {
  phase: string;
  status: string;
  details?: string;
}

// Funciones stub de cada agente (pueden luego separarse si se quieren como subtools/extensions)
async function orchestrator(brief: string): Promise<AgentResult> {
  return { phase: "orchestrator", status: "ok", details: "Delegado a landing-lead" };
}
async function landingLead(brief: string): Promise<AgentResult> {
  return { phase: "landing-lead", status: "ok", details: "Planificación y llamado a subagentes OK" };
}
async function landingDesigner(brief: string): Promise<AgentResult> {
  return { phase: "landing-designer", status: "ok", details: "Blueprint estructural listo" };
}
async function frontendBuilder(brief: string): Promise<AgentResult> {
  return { phase: "frontend-builder", status: "ok", details: "HTML/CSS generado" };
}
async function contentWriter(brief: string): Promise<AgentResult> {
  return { phase: "content-writer", status: "ok", details: "Copy generado" };
}
async function assetGenerator(brief: string): Promise<AgentResult> {
  return { phase: "asset-generator", status: "ok", details: "Assets generados" };
}
async function seoExpert(brief: string): Promise<AgentResult> {
  return { phase: "seo-expert", status: "ok", details: "SEO listo" };
}
async function qaInspector(brief: string): Promise<AgentResult> {
  return { phase: "qa-inspector", status: "ok", details: "QA passed" };
}

export default function(pi: ExtensionAPI) {
  pi.registerCommand("nowable", {
    description: "Genera landing page pipeline nowable (Claude → PI)",
    args: [
      {
        name: "brief",
        description: "Descripción corta del producto o landing a generar",
        type: "string"
      }
    ],
    async handler(args: string, ctx: ExtensionCommandContext) {
      const brief = args;
      const results: AgentResult[] = [];
      ctx.ui.notify("Arrancando pipeline nowable...", "info");
      // Ejecutar pipeline secuencial
      results.push(await orchestrator(brief));
      results.push(await landingLead(brief));
      results.push(await landingDesigner(brief));
      results.push(await frontendBuilder(brief));
      results.push(await contentWriter(brief));
      results.push(await assetGenerator(brief));
      results.push(await seoExpert(brief));
      results.push(await qaInspector(brief));
      results.forEach(r => ctx.ui.notify(`${r.phase}: ${r.status} (${r.details})`, "info"));
      ctx.ui.notify("Fin pipeline nowable.", "success");
    }
  });
}
