import { sql } from "@vercel/postgres";
import {
  CustomerField,
  CustomersTable,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Revenue,
  LatestInvoice,
  FormattedCustomersTable,
} from "./definitions";
import { formatCurrency } from "./utils";

export async function fetchRevenue() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a reponse for demo purposes.
    // Don't do this in real life :)

    console.log("Fetching revenue data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // const data = await sql<Revenue>`SELECT * FROM revenue`;
    const data = [
      { month: "Jan", revenue: 2000 },
      { month: "Feb", revenue: 1800 },
      { month: "Mar", revenue: 2200 },
      { month: "Apr", revenue: 2500 },
      { month: "May", revenue: 2300 },
      { month: "Jun", revenue: 3200 },
      { month: "Jul", revenue: 3500 },
      { month: "Aug", revenue: 3700 },
      { month: "Sep", revenue: 2500 },
      { month: "Oct", revenue: 2800 },
      { month: "Nov", revenue: 3000 },
      { month: "Dec", revenue: 4800 },
    ];

    console.log("Data fetch complete after 5 seconds.");

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchLatestInvoices() {
  try {
    console.log("fetching latest invoices...");
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
    });

    const data = [
      {
        id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
        name: "Delba de Oliveira",
        email: "delba@oliveira.com",
        image_url: "/customers/delba-de-oliveira.png",
        amount: 10,
      },
      {
        id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
        name: "Lee Robinson",
        email: "lee@robinson.com",
        image_url: "/customers/lee-robinson.png",
        amount: 10,
      },
      {
        id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
        name: "Hector Simpson",
        email: "hector@simpson.com",
        image_url: "/customers/hector-simpson.png",
        amount: 10,
      },
      {
        id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
        name: "Steven Tey",
        email: "steven@tey.com",
        image_url: "/customers/steven-tey.png",
        amount: 10,
      },
      {
        id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
        name: "Steph Dietz",
        email: "steph@dietz.com",
        image_url: "/customers/steph-dietz.png",
        amount: 10,
      },
    ];

    const latestInvoices = data.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice?.amount as number),
    }));
    return latestInvoices;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}

export async function fetchCardData() {
  try {
    console.log("fetching card data");
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    const numberOfInvoices = 15;
    const numberOfCustomers = 8;
    const totalPaidInvoices = formatCurrency(105.36);
    const totalPendingInvoices = formatCurrency(111.25);

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to card data.");
  }
}


export async function fetchFilteredInvoices(query: string) {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    const invoices = [
      {
        id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
        name: "Delba de Oliveira",
        email: "delba@oliveira.com",
        image_url: "/customers/delba-de-oliveira.png",
        amount: 15795,
        status: "paid",
        date: "2022-12-06",
      },
      {
        id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
        name: "Lee Robinson",
        email: "lee@robinson.com",
        image_url: "/customers/lee-robinson.png",
        amount: 15795,
        status: "pending",
        date: "2022-12-06",
      },
      {
        id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
        name: "Hector Simpson",
        email: "hector@simpson.com",
        image_url: "/customers/hector-simpson.png",
        amount: 15795,
        status: "pending",
        date: "2022-12-06",
      },
      {
        id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
        name: "Steven Tey",
        email: "steven@tey.com",
        image_url: "/customers/steven-tey.png",
        amount: 15795,
        status: "paid",
        date: "2022-12-06",
      },
      {
        id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
        name: "Steph Dietz",
        email: "steph@dietz.com",
        image_url: "/customers/steph-dietz.png",
        amount: 15795,
        status: "paid",
        date: "2022-12-06",
      },
      {
        id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
        name: "Michael Novotny",
        email: "michael@novotny.com",
        image_url: "/customers/michael-novotny.png",
        amount: 15795,
        status: "paid",
        date: "2022-12-06",
      },
      {
        id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
        name: "Evil Rabbit",
        email: "evil@rabbit.com",
        image_url: "/customers/evil-rabbit.png",
        amount: 15795,
        status: "pending",
        date: "2022-12-06",
      },
      {
        id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
        name: "Emil Kowalski",
        email: "emil@kowalski.com",
        image_url: "/customers/emil-kowalski.png",
        amount: 15795,
        status: "paid",
        date: "2022-12-06",
      },
      {
        id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
        name: "Amy Burns",
        email: "amy@burns.com",
        image_url: "/customers/amy-burns.png",
        amount: 15795,
        status: "pending",
        date: "2022-12-06",
      },
      {
        id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
        name: "Balazs Orban",
        email: "balazs@orban.com",
        image_url: "/customers/balazs-orban.png",
        amount: 15795,
        status: "paid",
        date: "2022-12-06",
      },
    ];

    const filteredData = invoices.filter((data) => {
      if (!query || query.length === 0 || typeof query !== "string") {
        return true; // Include the data when no query is provided or it's invalid
      } else {
        // Include the data if the name, email, or customerId includes the query
        return (
          data.name.toLowerCase().includes(query.toLowerCase()) ||
          data.email.toLowerCase().includes(query.toLowerCase()) ||
          data.id.toLowerCase().includes(query.toLowerCase())
        );
      }
    });

    return filteredData;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoices.");
  }
}


// export async function fetchInvoicesPages(query: string) {
//   try {
//     const count = await sql`SELECT COUNT(*)
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE
//       customers.name ILIKE ${`%${query}%`} OR
//       customers.email ILIKE ${`%${query}%`} OR
//       invoices.amount::text ILIKE ${`%${query}%`} OR
//       invoices.date::text ILIKE ${`%${query}%`} OR
//       invoices.status ILIKE ${`%${query}%`}
//   `;

//     const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
//     return totalPages;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch total number of invoices.');
//   }
// }

export async function fetchInvoiceById(id: string) {
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error("Database Error:", error);
  }
}

export async function fetchCustomers() {
  try {

    await new Promise((resolve, reject) => {setTimeout(resolve,3000)})
    const customers = [
      {
        id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        name: 'Delba de Oliveira',
        email: 'delba@oliveira.com',
        image_url: '/customers/delba-de-oliveira.png',
        total_invoices:2,
        total_paid:1,
        total_pending:1,
        
      },
      {
        id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
        name: 'Lee Robinson',
        email: 'lee@robinson.com',
        image_url: '/customers/lee-robinson.png',
        total_invoices:2,
        total_paid:1,
        total_pending:1,
      },
      {
        id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
        name: 'Hector Simpson',
        email: 'hector@simpson.com',
        image_url: '/customers/hector-simpson.png',
        total_invoices:2,
        total_paid:1,
        total_pending:1,
      },
      {
        id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
        name: 'Steven Tey',
        email: 'steven@tey.com',
        image_url: '/customers/steven-tey.png',
        total_invoices:2,
        total_paid:1,
        total_pending:1,
      },
      {
        id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
        name: 'Steph Dietz',
        email: 'steph@dietz.com',
        image_url: '/customers/steph-dietz.png',
        total_invoices:2,
        total_paid:1,
        total_pending:1,
      },
      {
        id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
        name: 'Michael Novotny',
        email: 'michael@novotny.com',
        image_url: '/customers/michael-novotny.png',
        total_invoices:2,
        total_paid:1,
        total_pending:1,
      },
      {
        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
        name: 'Evil Rabbit',
        email: 'evil@rabbit.com',
        image_url: '/customers/evil-rabbit.png',
        total_invoices:2,
        total_paid:1,
        total_pending:1,
      },
      {
        id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
        name: 'Emil Kowalski',
        email: 'emil@kowalski.com',
        image_url: '/customers/emil-kowalski.png',
        total_invoices:2,
        total_paid:1,
        total_pending:1,
      },
      {
        id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
        name: 'Amy Burns',
        email: 'amy@burns.com',
        image_url: '/customers/amy-burns.png',
        total_invoices:2,
        total_paid:1,
        total_pending:1,
      },
      {
        id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
        name: 'Balazs Orban',
        email: 'balazs@orban.com',
        image_url: '/customers/balazs-orban.png',
        total_invoices:2,
        total_paid:1,
        total_pending:1,
      },
    ];
    return customers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all customers.");
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql<CustomersTable>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch customer table.");
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * from USERS where email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
