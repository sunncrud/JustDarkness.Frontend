export async function processPageData(
  items: string[], 
  searchParams: Promise<{ q?: string; page?: string }>, 
  itemsPerPage: number = 8
) {
  // 1. Resolve the URL parameters
  const resolvedParams = await searchParams;
  const query = resolvedParams.q || "";
  const currentPage = Number(resolvedParams.page) || 1;

  // 2. Filter the items based on the search query
  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(query.toLowerCase())
  );

  // 3. Calculate pagination math
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  // 4. Return the calculated values as a neat object
  return {
    paginatedItems,
    totalPages,
    currentPage,
    query
  };
}