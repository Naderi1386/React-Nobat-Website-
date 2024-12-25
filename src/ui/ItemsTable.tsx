import { useFilterRoute } from "../hooks/useFilterRoute";

interface ItemsTablePropType {
  filter?: string;
  onClose?: () => void;
  items: string[];
  filterName: string;
  filterPersian: string;
}

const ItemsTable = ({
  filter,
  onClose,
  items,
  filterName,
  filterPersian,
}: ItemsTablePropType) => {
  const Items = filter ? items.filter((c) => c.startsWith(filter)) : items;
  const { filterRoute,searchParams,setSearchParams } = useFilterRoute();

  return (
    <>
      {Items.length > 0 ? (
        <ul className="divide-y divide-slate-300/50">
          {Items.map((item) => (
            <li
              onClick={() => {
                filterRoute(filterName, item);
                searchParams.set("page", "1");
                setSearchParams(searchParams);
                onClose?.();
              }}
              className="py-4 cursor-pointer w-full text-center"
            >
              <p className="text-sm">{item}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="text-xl font-semibold text-center py-8">
          {filterPersian} مورد نظر یافت نشد
        </h3>
      )}
    </>
  );
};

export default ItemsTable;
