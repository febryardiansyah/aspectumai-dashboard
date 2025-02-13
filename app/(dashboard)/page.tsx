'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/global/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/global/button';
import { ProductsTable } from './products-table';
import { TBot } from '@/lib/bot';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import NewTabs from '@/components/global/new-tabs';
import CategoriesTable from './categories-table';
import Modal from '@/components/global/modal';
import { Input } from '@/components/global/input';

export default function ProductsPage() {
  const router = useRouter();
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

  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      label: 'Bots',
      content: (
        <ProductsTable products={products} offset={0} totalProducts={10} />
      )
    },
    {
      label: 'Categories',
      content: (
        <CategoriesTable
          categories={[
            { id: 1, name: 'Category 1' },
            { id: 2, name: 'Category 2' },
            { id: 3, name: 'Category 3' }
          ]}
        />
      )
    },
    {
      label: 'Tab 3',
      content: <div>This is the content of Tab 3.</div>
    }
  ];

  const handleAdd = () => {
    switch (selectedTab) {
      case 0:
        router.push('/create-bot');
        break;
      case 1:
        openModal();
        break;

      default:
        break;
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col">
      <Button
        size="sm"
        className="gap-1 w-fit place-self-end"
        onClick={handleAdd}
      >
        <PlusCircle className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Add new {tabs[selectedTab].label}
        </span>
      </Button>

      <NewTabs tabs={tabs} onchange={(e) => setSelectedTab(e)} />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add new Category"
        actions={
          <div className="flex gap-2">
            <Button size="sm" onClick={closeModal}>
              Save
            </Button>
            <Button size="sm" onClick={closeModal}>
              Cancel
            </Button>
          </div>
        }
      >
        <Input label="Name" required />
      </Modal>
    </div>
  );
}
