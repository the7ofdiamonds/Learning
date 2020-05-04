export interface Transaction {
    from: string;
    to: string;
    amount?: number;
    fee: number;
    total: number;
    currentbalance?: number;
    endingbalance?: number;
    lasttransactionid?: string;
    transactionid?: string;
}
