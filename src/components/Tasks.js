
const tasks =[
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2:30pm',
        reminder:true
    },
    {
        id:2,
        text:'Meeting at school',
        day:'Feb 6th at 1:30pm',
        reminder:true,
    },
    {
        id:3,
        text:'Food shopping',
        day:'Feb 5th at 6:30pm',
        reminder:false
    }

];
const Tasks = () => {
  return (
    <div>
      {
        tasks.map(task =><h3>{task.text}</h3>)
      }
    </div>
  )
}

export default Tasks
