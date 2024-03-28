'use client';

const DoneTodo02 = ({ id, isCompleted, doneTodo }:
                        { id: number; isCompleted: boolean; doneTodo: (id: number, isCompleted: boolean) => Promise<void>; }) => {
    return (
        <input
            onChange={() => doneTodo(id, isCompleted)}
            checked={isCompleted}
            type="checkbox"
        />
    );
};

export default DoneTodo02;