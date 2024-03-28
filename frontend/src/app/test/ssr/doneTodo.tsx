'use client';

import { useTransition } from 'react';
import { doneTodo } from '@/app/test/ssr/actions';

const DoneTodo = ({ id, isCompleted }: { id: number, isCompleted: boolean }) => {
    let [isPending, startTransition] = useTransition();

    return (
        <input
            onChange={() => startTransition(() => doneTodo(id, isCompleted))}
            checked={isCompleted}
            type="checkbox"
        />
    );
};

export default DoneTodo;