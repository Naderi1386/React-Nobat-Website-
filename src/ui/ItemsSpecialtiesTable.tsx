import { useNavigate } from "react-router-dom";

interface ItemsTablePropType {
  filter?: string;
  onClose?: () => void;
  items: string[];
  filterName: string;
  filterPersian: string;
}

const ItemsSpecialtiesTable = ({
  filter,
  onClose,
  items,
  filterName,
  filterPersian,
}: ItemsTablePropType) => {
  const Items = filter ? items.filter((c) => c.startsWith(filter)) : items;
  const navigate=useNavigate()

  return (
    <>
      {Items.length > 0 ? (
        <ul className="divide-y divide-slate-300/50">
          {Items.map((item) => (
            <li
              onClick={() => {
                navigate(`/?page=1&specialty=${item}`);
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
          مورد نظر یافت نشد {filterPersian}
        </h3>
      )}
    </>
  );
};

export default ItemsSpecialtiesTable;
