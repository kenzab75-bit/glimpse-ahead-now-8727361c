const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "https://api.truthshield.org/v1";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

interface ApiOptions {
  signal?: AbortSignal;
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

async function postJson<TPayload, TResponse>(
  endpoint: string,
  payload: TPayload,
  { signal }: ApiOptions = {}
): Promise<ApiResponse<TResponse>> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
    credentials: "include",
    mode: "cors",
    signal,
  });

  const data = (await response.json().catch(() => ({}))) as TResponse;

  if (!response.ok) {
    throw Object.assign(new Error("La requête a échoué"), { status: response.status, data });
  }

  return { data, status: response.status };
}

async function getJson<TResponse>(endpoint: string, { signal }: ApiOptions = {}): Promise<TResponse> {
  const headers: Record<string, string> = {};
  if (API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "GET",
    headers,
    credentials: "include",
    mode: "cors",
    signal,
  });

  if (!response.ok) {
    throw Object.assign(new Error("La requête a échoué"), { status: response.status });
  }

  return response.json() as Promise<TResponse>;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  consent: boolean;
}

export interface WhistleblowPayload {
  message: string;
  consent: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  category: string;
  evidenceUrl?: string;
}

export async function submitContact(payload: ContactPayload, options?: ApiOptions) {
  return postJson<ContactPayload, { id: string }>("/contact", payload, options);
}

export async function submitWhistleblow(payload: WhistleblowPayload, options?: ApiOptions) {
  return postJson<WhistleblowPayload, { id: string }>("/testimonies", payload, options);
}

export async function fetchTestimonials(options?: ApiOptions): Promise<Testimonial[]> {
  try {
    return await getJson<Testimonial[]>("/testimonies", options);
  } catch (error) {
    console.warn("Impossible de récupérer les témoignages distants, utilisation des données locales.", error);
    return [
      {
        quote: "Après mon intervention, j'ai souffert de complications qui n'ont jamais été correctement prises en charge. Je me retrouve avec des dommages permanents.",
        author: "Patient Anonyme",
        location: "France",
        category: "Complications",
        evidenceUrl: "https://example.org/dossier-complications.pdf",
      },
      {
        quote: "La clinique a menti sur mon diagnostic pour justifier des procédures inutiles qui m'ont laissé dans un état pire.",
        author: "Marie S.",
        location: "Suisse",
        category: "Fraude",
        evidenceUrl: "https://example.org/rapport-fraude.pdf",
      },
      {
        quote: "Facturations abusives, frais cachés non mentionnés. Le montant final était le double du devis initial.",
        author: "Sophie M.",
        location: "Luxembourg",
        category: "Facturation",
        evidenceUrl: "https://example.org/facture-comparee.pdf",
      },
    ];
  }
}
