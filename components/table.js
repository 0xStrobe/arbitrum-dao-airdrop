// const daos = [
//   {
//     name: "Lindsay Walton",
//     title: "Front-end Developer",
//     department: "Optimization",
//     email: "lindsay.walton@example.com",
//     role: "Member",
//     image:
//       "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
//   // More daos...
// ];

const Table = ({ daos, arbPrice }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 container mx-auto">
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                      DAO Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Airdrop Amount (tokens)
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Airdrop Amount ($)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {daos.map((dao) => {
                    const airdropAmountDollars = dao.airdropAmount * arbPrice;
                    return (
                      <tr key={dao.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm ">
                          <div className="flex items-center">
                            <div className="">
                              <div className="font-medium text-gray-900">{dao.daoName}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {Number(dao.airdropAmount).toLocaleString()}
                          {/* <div className="text-gray-900">{person.title}</div>
                        <div className="text-gray-500">{person.department}</div> */}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {airdropAmountDollars.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
