'use client'

import React from 'react'
import { ButtonProps } from '@/app/Types/Button'

export default function Button({ text }: ButtonProps) {
  return (
    <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {text}
    </button>
  )
}
