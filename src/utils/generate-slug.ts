export function generateSlug(text: string): string {
    return text
        .normalize("NFD") // Normalize para decompor os caracteres acentuados em caracteres normais e acentos separados
        .replace(/[\u0300-\u036f]/g, "") // Remove caracteres de acentuação
        .toLowerCase() // Converte para minúsculas
        .replace(/[^\w\s]/g, "") // Remove símbolos
        .replace(/\s+/g, "-"); // Substitui espaços por hífens
};



