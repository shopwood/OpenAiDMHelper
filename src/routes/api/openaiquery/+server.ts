
import { json, text } from '@sveltejs/kit';
import { OpenAI } from 'openai';

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});


export async function POST({ request })  {
	const { query } = await request.json();
	return json({result: await runQuery(query)});
}

async function runQuery(query: string): Promise<string | null> {
~
    console.log("query:" + query)
    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are a dungeons and dragons DM." },
            {
                role: 'user',
                content: query,
            },],
        model: "gpt-3.5-turbo",
      });
    
      console.log(completion.choices[0]);

      return completion.choices[0]?.message.content;
}
