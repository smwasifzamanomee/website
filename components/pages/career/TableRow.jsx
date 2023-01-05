const TableRow = ({item, onChange, applicationsIds}) => {


  return <tr className="hover:bg-gray-800">
    <th className=" py-4 text-sm text-gray-700 text-left pl-3 whitespace-nowrap">

     <input 
      type="checkbox" 
      value={item?.id} 
      checked={applicationsIds.includes(item?.id.toString())}
      onChange={onChange}
      />

    </th>
    {/* <th className="font-bold text-primary hover:underline">{item.id}</th> */}
    <td className="py-4 text-sm text-gray-300 text-left whitespace-nowrap">{item?.full_name}</td>
    <td className="py-4 text-sm text-gray-300 text-left whitespace-nowrap">{item?.email}</td>
    <td className="py-4 text-sm text-gray-300 text-left whitespace-nowrap">{item?.position}</td>
    <td className="py-4 text-sm text-gray-300 text-left whitespace-nowrap">{item?.cover_letter.slice(0, 10)}</td>
    <td className="py-4 text-sm text-gray-300 text-left whitespace-nowrap">
      <a className="py-2 px-4 bg-gray-300 rounded-lg bg-opacity-50" href={`${item?.resume}`} target="_blank" rel="noopener noreferrer">View</a>
    </td>
    <td className={`
    py-4 text-sm text-gray-800 text-left whitespace-nowrap`}>
      <span className={`
      ${item?.application_status.toLowerCase() === 'pending' && 'bg-yellow-100'}
      ${item?.application_status.toLowerCase() === 'progress' && 'bg-red-100'}
      ${item?.application_status.toLowerCase() === 'rejected' && 'bg-purple-100'}
      ${item?.application_status.toLowerCase() === 'accepted' && 'bg-green-100'}
       py-2 px-4 w-28 inline-block rounded text-center capitalize`}>{item?.application_status}</span>
    </td>
  </tr>
};

export default TableRow;
