import React from "react";

interface GenericGridProps<T> {
  items: T[];
  emptyMessage: string;
  gridClassName: string;
  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function GenericGrid<T>({ items, emptyMessage, gridClassName, renderItem }: GenericGridProps<T>) {
  if (items.length === 0) {
    return <div className="text-gray-500 text-center py-12 col-span-full">{emptyMessage}</div>;
  }

  return (
    <div className={gridClassName}>
      {items.map((item, index) => renderItem(item, index))}
    </div>
  );
}