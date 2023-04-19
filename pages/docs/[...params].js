import { useRouter } from 'next/router'
import React from 'react'

function DocPage() {

  const router = useRouter()
  const {params =[]} = router.query
  if (params.length ===2){
    return (
    <div>
      <h1>This is deets from param {params[0]} feature {params[1]}</h1>
    </div>
  )
  } else if (params.length ===3){
    return (
    <div>
      <h1>This is deets from param {params[0]} feature {params[1]}, subfeature {params[2]}</h1>
    </div>
  )
  } else {
    return (
      <div>
        <h1>This good??</h1>
      </div>
    )
  }
}

export default DocPage