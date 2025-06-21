import OpenAI from "openai";
import { OPEN_AI_KEY } from "../constants/constants";

const client = new OpenAI({
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

export default client;
