import React from 'react';

export function handleEmpty<T>(val: T, message: string): T | string {
    return val ? val : message
}

export function choose<T>(choices: Array<T>, index?: number): { choice: T, index: number } {
    if(!index)
        index = Math.floor(Math.random() * choices.length);
    return {choice: choices[index], index: index};
}