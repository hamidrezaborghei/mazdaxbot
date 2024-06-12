import "@telegram-apps/telegram-ui/dist/styles.css";
import {
  Button,
  Headline,
  Image,
  Input,
  Title,
} from "@telegram-apps/telegram-ui";
import { TonConnectButton } from "@tonconnect/ui-react";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen p-4 items-center">
      <div className="w-full flex items-center justify-between p-4">
        <Title weight="1">MazBot</Title>
        <TonConnectButton />
      </div>
      <div className="flex flex-1 flex-col w-full gap-4">
        <Input
          header="Ton Amount"
          before={
            <Image
              src="/ton_symbol.png"
              className="bg-transparent border-white shadow-none"
            />
          }
        />
        <div className="p-[0px_22px_16px] flex flex-col gap-2">
          <Headline className="text-center" weight="2">
            It will cost
          </Headline>
          <Title weight="1" className="text-center">
            125,000 IRR
          </Title>
        </div>
      </div>
      <Button disabled className="w-full">
        Convert
      </Button>
    </div>
  );
}

export default App;
