import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const { name, mail, password } = await req.json();

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name,
                mail,
                password: hashedPassword,
                role: 'user', // デフォルトの役割
                backendToken: 'defaultToken', // デフォルトのバックエンドトークン
            },
        });
        return NextResponse.json(user, { status: 200 });
    } catch (error: any) {
        console.error('Error registering user:', error);
        if (error.code === 'P2002' && error.meta?.target?.includes('mail')) {
            return NextResponse.json({ error: 'このメールアドレスは既に登録されています。' }, { status: 409 });
        } else {
            return NextResponse.json({ error: 'ユーザー登録に失敗しました。' }, { status: 500 });
        }
    }
}
