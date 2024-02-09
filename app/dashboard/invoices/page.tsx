"use client"
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
//  import { fetchInvoicesPages } from '@/app/lib/data';
export default  function Page() {
  const searchparams= useSearchParams();
const query=searchparams?.get("query");
console.log("searching: ", query);
  // const totalPages = await fetchInvoicesPages("1")
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
       <Suspense fallback={<InvoicesTableSkeleton />}>
        <Table query={query || ''}/>
      </Suspense>
     
    </div>
  );
}