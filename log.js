for (let id= 1; id<= 50; id++) {

  if (id% 3 === 0 && id % 8 === 0) 
    {
    console.log( `CRITICAL FAILURE: Initiating Emergency System Shutdown Sequence at Block ${id}`);
    break;
  }

  if (id % 5 === 0)
     {


    console.log(`Block ${id}: Rate Limit Warning Issued`);
  }

  if (id % 7 === 0) 
    {
    console.log(`Block ${id}: Database Read Latency Spike Detected`);
  }
}