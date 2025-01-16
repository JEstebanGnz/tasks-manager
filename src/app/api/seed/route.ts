import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  //First, purify the DB
  await prisma.task.deleteMany(); //Delete * from task

  await prisma.task.createMany({
    data: [
      { description: "Tiempo de calidad con mi vida" },
      { description: "Hacer Journaling" },
      { description: "Practicar Piano" },
      { description: "Almorzar" },
      { description: "Entrenamiento calistenia y pesas", isCompleted: true },
    ],
  });

  const task = await prisma.task.findMany({ where: { isCompleted: true } });

  return NextResponse.json({ data: task });
}
