import { z } from 'zod';

//TODO: work on CreateNFE schema
export const NFeSchema = z.object({
  cUF: z.string(),
});

export type NFe = z.infer<typeof NFeSchema>;

export default {
    NFeSchema,
}