import React from 'react'
import TimerEdit from '../../components/timer-components/timerEdit'
import TimerView from '../../components/timer-components/timerView'

const Timer = () => {
  return (
    <div>
        <TimerView />
        <TimerEdit />
    </div>
  )
}

export default Timer