'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/global/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/global/button';
import { ProductsTable } from './products-table';
import { TBot } from '@/lib/bot';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const router = useRouter()
  // const searchParams = await props.searchParams;
  // const search = searchParams.q ?? '';
  // const offset = searchParams.offset ?? 0;
  const products: TBot[] = [
    {
      id: 1,
      name: 'Product 1',
      status: 'active',
      avatar: 'https://via.placeholder.com/64',
      banner: 'https://via.placeholder.com/64',
      description: 'Product description',
      instructions: 'Product instructions',
      type: 'Product type',
      input: ['input'],
      output: 'output',
      model: 'model',
      category: 'category',
      greetings: 'greetings',
      conversationStarter: ['conversationStarter'],
      tokenPrice: 1,
      createdAt: new Date()
    }
  ];

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            Archived
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1" onClick={()=> router.push('/create-bot')}>
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add new Bot
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <ProductsTable products={products} offset={0} totalProducts={10} />
      </TabsContent>
    </Tabs>
  );
}
