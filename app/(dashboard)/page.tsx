import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductsTable } from './products-table';
import { SelectProduct } from '@/lib/db';

export default function ProductsPage() {
  // const searchParams = await props.searchParams;
  // const search = searchParams.q ?? '';
  // const offset = searchParams.offset ?? 0;
  const products: SelectProduct[] = [
    {
      id: 1,
      name: 'Product 1',
      status: 'active',
      price: '100',
      stock: 10,
      availableAt: new Date(),
      imageUrl: 'https://via.placeholder.com/100'
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
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
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
