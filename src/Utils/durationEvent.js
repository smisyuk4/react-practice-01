// https://date-fns.org/v2.29.3/docs/formatDistanceStrict
import { formatDistanceStrict } from 'date-fns'

export function durationEvent(start, finish){
    return formatDistanceStrict(Date.parse(start), Date.parse(finish), []) 
}