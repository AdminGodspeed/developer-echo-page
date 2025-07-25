import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

const Hobbies = () => {
    const hobbies = ['Photography', 'Rock Climbing', 'Cooking', 'Travel', 'Gaming', 'Reading'];

  return (
 <Card className="bg-gray-800 shadow-sm border-0 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">
            Hobbies & Interests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((hobby, index) => (
              <Badge
                key={index}
                variant="destructive"
                className="text-gray-300 transition-colors"
              >
                {hobby}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
  )
}

export default Hobbies
