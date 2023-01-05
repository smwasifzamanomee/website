
const TableCol = ({ handleAllChecked, items }) => {
  // console.log(!items.some((item) => item?.isChecked !== false));
  return (
    <tr>
      <th className="w-[150px] pl-3  py-3 text-sm font-semibold tracking-wide text-left flex items-center gap-x-2">
        <input 
        type="checkbox" 
        value="allselect" 
        // checked={!items.some((item) => item?.isChecked !== true)}
        onChange={handleAllChecked}
        />
        <span>Select</span>
      </th>
      <th className="w-[300px]   py-3 text-sm font-semibold tracking-wide text-left">
        FullName
      </th>
      <th className="w-[400px]  py-3 text-sm font-semibold tracking-wide text-left">
        Email
      </th>
      <th className="w-[300px]  py-3 text-sm font-semibold tracking-wide text-left">
        Position
      </th>
      <th className="w-[150px]  py-3 text-sm font-semibold tracking-wide text-left">
        Cover Letter
      </th>
      <th className="w-[150px]   py-3 text-sm font-semibold tracking-wide text-left">
        Resume
      </th>
      <th className="w-[150px]   py-3 text-sm font-semibold tracking-wide text-left ">
        Action
      </th>
    </tr>
  );
};

export default TableCol;
