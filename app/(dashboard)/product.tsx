import Image from 'next/image';
import { Badge } from '@/components/global/badge';
import { Button } from '@/components/global/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/global/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/global/table';
import { TBot } from '@/lib/bot';

export function Product({ botItem }: { botItem: TBot }) {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        {/* <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={product.imageUrl}
          width="64"
        /> */}
      </TableCell>
      <TableCell className="font-medium">{botItem.name}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize">
          {botItem.status}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{`${botItem.type}`}</TableCell>
      <TableCell className="hidden md:table-cell">{botItem.model}</TableCell>
      <TableCell className="hidden md:table-cell">
        {botItem.createdAt.toLocaleDateString("en-US")}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>
              {/* <form action={deleteProduct}>
                <button type="submit">Delete</button>
              </form> */}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
