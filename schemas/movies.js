import z from 'zod'

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie must be a string',
    required_error: 'Movie title is required'
  }),
  year: z.number().int().min(1900).max(2035),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10),
  poster: z.string().url({
    message: 'Poster must be a valid URL'
  }),
  genre: z.array(
    z.enum([
      'Action',
      'Adventure',
      'Comedy',
      'Drama',
      'Fantasy',
      'Horror',
      'Thriller',
      'Sci-Fi'
    ])
  )
})

// eslint-disable-next-line space-before-function-paren
export function validateMovie(obj) {
  return movieSchema.safeParse(obj)
}

// eslint-disable-next-line space-before-function-paren
export function validatePartialMovie(obj) {
  return movieSchema.partial().safeParse(obj)
}
