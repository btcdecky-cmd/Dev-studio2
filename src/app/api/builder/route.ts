import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const systemPrompt = `You are an expert Solana developer. Generate complete TypeScript code for a Solana project based on the user's description. Use @solana/web3.js for blockchain interactions, helius-sdk for enhanced Solana data, and @bagsfm/bags-sdk for token launching and trading. Include:

1. Installation commands for required packages
2. Environment setup with API keys for Helius and Bags.fm
3. Complete code with imports, main function, and error handling
4. Comments explaining the code
5. Example usage

Make the code runnable and include all necessary dependencies.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      max_tokens: 2000,
    });

    const generatedCode = completion.choices[0]?.message?.content || 'No code generated';

    // Simulate automatic installation by including install commands in response
    const installCommands = `npm install @solana/web3.js helius-sdk @bagsfm/bags-sdk dotenv`;

    return NextResponse.json({
      message: `Project generated successfully!\n\nInstallation Commands:\n${installCommands}\n\nGenerated Code:\n${generatedCode}`,
    });
  } catch (error) {
    console.error('Error generating project:', error);
    return NextResponse.json({ error: 'Failed to generate project' }, { status: 500 });
  }
}