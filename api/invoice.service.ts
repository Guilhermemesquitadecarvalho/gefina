type invoiceStatus = 'paid' | 'pending';

interface customer{
    name: string;
    email: string;
}

interface invoice {
    id: number;
    amount: number;
    status: invoiceStatus;
    issueDate: string;
    dueDate: string;
    customer: customer;
}

const invoices: invoice[] = [
    {
        id: 1,
        amount: 520354,
        status: "pending",
        issueDate: "2026-10-01",
        dueDate: "2026-10-31",
        customer: {
            name: "Construtora Meridiano",
            email: "comercial@meridiano.com.br"
        }
    }, {
        id: 2,
        amount: 320000,
        status: "paid",
        issueDate: "2026-09-01",
        dueDate: "2026-09-30",
        customer: {
            name: "Construtora Alpha",
            email: "contato@construtoraalpha.com.br"
        }
    }, {
        id: 3,
        amount: 150000,
        status: "pending",
        issueDate: "2026-08-01",
        dueDate: "2026-08-31",
        customer: {
            name: "Construtora Beta",
            email: "contato@construtorabeta.com.br"
        }
    }
];

export function findManyInvoices(): invoice[] {
    return invoices;
}

export function findInvoiceById(id:number): invoice{
     return invoices.find(invoice => invoice.id === id);
}
