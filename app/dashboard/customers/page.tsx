import { lusitana } from '@/app/ui/fonts'
import Search from '@/app/ui/search'
import { InvoicesCustomerSkeleton, InvoicesTableSkeleton, TableRowSkeleton } from '@/app/ui/skeletons'
import React, { Suspense } from 'react'
import CustomersTable from '@/app/ui/customers/table'
import { fetchCustomers } from '@/app/lib/data'
const page =async () => {
 
  return (
    <>
    <div className='w-full'>
       <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
     
      </div>
      
       <Suspense fallback={<InvoicesCustomerSkeleton/>}>
        <CustomersTable/>
      </Suspense>
      </div>

    
    
    
    </>
  )
}

export default page