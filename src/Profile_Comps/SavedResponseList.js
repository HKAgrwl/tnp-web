import React from 'react'
import SavedResponse from './SavedResponse';

export default function SavedResponseList({response}) {
  return (
    <div>
        <div className="Saved_Ans">
                <ul>
                    {response.map((x) =>(
                        <SavedResponse/>
                    ))}
                </ul>
        </div>
    </div>
  )
}
