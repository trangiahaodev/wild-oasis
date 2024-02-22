import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // Sort
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    error,
    data: bookingsData = {},
    // At first the bookingsData is unsettled (being fetched from the server) so it'll create a bug
    // Solution is to set the default value of bookingsData is empty object {}
  } = useQuery({
    // Whenever filter changes, React Query will automatically refectches data to get the latest data
    // In other words, the mechanism is as same as the dependencies array in useEffect()
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, error, bookingsData };
}
