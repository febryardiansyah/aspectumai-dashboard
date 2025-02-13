import { Button } from '@/components/global/button';
import { Card } from '@/components/global/card';
import { TCategory } from '@/lib/category';
import React from 'react';

export default function CategoriesTable({
  categories
}: {
  categories: TCategory[];
}) {
  return (
    <Card className="p-5">
      <ul className="flex flex-col gap-3">
        {categories.map((category, index) => (
          <div className='cursor-pointer'>
            <li key={category.id}>{index + 1}. {category.name}</li>
            <hr />
          </div>
        ))}
      </ul>
    </Card>
  );
}
