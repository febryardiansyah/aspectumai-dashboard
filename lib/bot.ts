export type TBot = {
  id: number;
  name: string;
  description: string;
  instructions: string;
  avatar: string;
  banner: string;
  type: string;
  input: string[];
  output: string;
  model: string;
  category: string;
  greetings: string;
  conversationStarter: string[];
  tokenPrice: number;
  status: string;
  createdAt: Date;
};
