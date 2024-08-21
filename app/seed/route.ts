import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { projects } from '../lib/placeholder-data';

const client = await db.connect();

async function seedProjects() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    DROP TABLE IF EXISTS projects;
  `

  await client.sql`
    CREATE TABLE IF NOT EXISTS projects (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      language TEXT NOT NULL,
      model TEXT NOT NULL,
      problem VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedProjects = await Promise.all(
    projects.map(
      (project) => client.sql`
        INSERT INTO projects (id, name, description, language, model, problem, image_url)
        VALUES (${project.id}, ${project.name}, ${project.description}, ${project.language}, ${project.model}, ${project.problem}, ${project.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedProjects;
}


export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedProjects();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
