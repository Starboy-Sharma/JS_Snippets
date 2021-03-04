const unreads = [
    {
      name: "Janson",
      channel_id: 706,
      count: 1
    },
    {
      name: "Janson2",
      channel_id: 702,
      count: 2
    },
    {
      name: "Pankaj",
      channel_id: 692,
      count: 2
    }
  ];


  const unread1 = [
    {
       name: "Janson",
       channel_id: 706,
       count: 1
     },
     {
       name: "Janson2",
       channel_id: 702,
       count: 2
    },
    {
        name: 'Pankaj Sharma',
        channel_id: 108,
        count: 1
    },
    {
        name: 'Pankaj Sharma',
        channel_id: 108,
        count: 2
    }
  ]

  console.table(unreads)
  console.table(unread1)


  const clone_unreads = [...unreads, ...unread1]
  let result = []
  let isFound

  for(let i = 0; i < clone_unreads.length; i++) {

    isFound = false
    for(let j = 0; j < result.length; j++) {

        if (clone_unreads[i].channel_id == result[j].channel_id) {

            isFound = true;

            result[j].count = result[j].count + clone_unreads[i].count;

            console.log(result[j])

            break
        }
    }

    if (isFound === false) {
        let obj = {
            name: clone_unreads[i].name,
            channel_id: clone_unreads[i].channel_id,
            count: clone_unreads[i].count
        }

        result.push(obj)
    }

  }

  console.table(result)
