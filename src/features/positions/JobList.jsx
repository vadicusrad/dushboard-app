import { JobPosition } from './JobPosition';

import { usePositions } from './use-positions';
import { useFetchPositions } from './use-fetch-positions';
import { addFilter } from 'features/filters/filterSlice';
import { useDispatch } from 'react-redux';

const JobList = () => {

  useFetchPositions()

  const positions =  usePositions()
  const dispatch = useDispatch()
 
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))

  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition handleAddFilter={handleAddFilter} key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};