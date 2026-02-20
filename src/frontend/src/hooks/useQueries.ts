import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { FormEntry } from '../backend';

export function useSubmitEntry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitEntry(data.name, data.email, data.phone, data.service, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['entries'] });
    },
  });
}

export function useGetAllEntries() {
  const { actor, isFetching } = useActor();

  return useQuery<FormEntry[]>({
    queryKey: ['entries'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllEntries();
    },
    enabled: !!actor && !isFetching,
  });
}
