import * as openai from "openai";
import { Request, Response } from "express";

//Function to mimic the caller
const guardian = async (req: Request, res: Response) => {
  const GLOBAL_THOUGHTS: string[] = [];
  console.log(`Thoughts are ${GLOBAL_THOUGHTS}`);
  try {
    const { messages, fraudTopic } = req.body;
  } catch (error) {
    // Do nothing if there's an exception
  }

  const scoreText: number = 0;
  const MODEL: string = "gpt-3.5-turbo";
  console.log("messages", req.body.messages, req.body.fraudTopic);

  if (req.body.messages) {
    const c_messages: any[] = convertToGrandmaPov(
      req.body.messages,
      req.body.fraudTopic
    );
    // assert checkUniqueNeighbors([m['role'] for m in c_messages]), 'Two messages in a row from the same role'
    const out: any = await openai.ChatCompletion.create({
      model: MODEL,
      messages: c_messages,
      temperature: 0
    });
    const outMessage: any = out.choices[0].message.to_dict();

    const thoughts: string[] = [];
    const replace = (match: string) => {
      thoughts.push(match.replace("Parantheses:", ""));
      return "";
    };
    outMessage.content = outMessage.content
      .replace(/\((.*?)\)/g, replace)
      .trim();

    const madelineRegex = /\b[Mm]adeline:\b/g;
    if (madelineRegex.test(outMessage.content)) {
      outMessage.content = outMessage.content.replace(madelineRegex, "").trim();
    }

    const formattedThoughts: string = thoughts.join(" ");
    const conversation: string = req.body.messages
      .map((m: any) => m.text)
      .join(" ");
    const scorePrompt: string = `You're an expert at fraud detection. Is the call conversation below a scam? Give a score from 1-100 if it is. Only give the number as your response: ${conversation}`;
  }

  res.status(200).send("Response sent.");
};

//Add additional code from here

export default guardian;
