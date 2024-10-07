export interface Product {
    id: string;
    base64Image: string;
    description: string;
    price: number;
    strikePrice: number | null;
    title: string;
    checked: boolean;  // For UI state (to handle item selection)
}
