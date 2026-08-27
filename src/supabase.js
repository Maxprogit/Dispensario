import { createClient } from '@supabase/supabase-js'

// Tu URL directa de tu proyecto en Ohio
const supabaseUrl = 'https://nlxjohlvufszgbldlzuz.supabase.co'

// Aquí pegas la Publishable key enterita que acabas de copiar
const supabaseKey = 'sb_publishable_nj3jLg0dbqoRP4ll_dOiDA_aOQKOZDn' 

// Creamos y exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)