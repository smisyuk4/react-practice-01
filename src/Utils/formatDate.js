// https://date-fns.org/v2.29.3/docs/format
import { format } from 'date-fns'

export function formatDate(start){
    return format(Date.parse(start), "dd MMMM yyyy HH:mm", []) 
}