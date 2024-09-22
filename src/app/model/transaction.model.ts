export interface Transaction {
    id?: number;
    user_id: number;
    propriete_id: number;
    typeTransaction: string; // location ou vente
    statutTransaction: string; // en attente, acceptée, rejetée
    montant: number;
    dateTransaction: Date;
  }