import { useQuery } from "@tanstack/react-query"
import { CarService } from "../service/shop.service"

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => CarService.getData()
    })
};

  