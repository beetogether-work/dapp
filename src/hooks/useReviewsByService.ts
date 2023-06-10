import { useState, useEffect } from 'react';
import { getReviewsByService } from '../queries/reviews';
import { IReview } from '../types';
import { useChainId } from './useChainId';

const useReviewsByService = (serviceId: string): { reviews: IReview[] } => {
  const chainId = useChainId();
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReviewsByService(chainId, serviceId);
        if (response?.data?.data?.reviews) {
          setReviews(response.data.data.reviews);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [serviceId]);

  return { reviews };
};

export default useReviewsByService;
