import "@telegram-apps/telegram-ui/dist/styles.css";
import { Headline, Image, Input, Title } from "@telegram-apps/telegram-ui";
import { TonConnectButton } from "@tonconnect/ui-react";
import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState<number>(0);
  useEffect(() => {
    if (amount > 0) WebApp.MainButton.show();
    else WebApp.MainButton.hide();
  }, [amount]);
  useEffect(() => {
    WebApp.MainButton.setText("Convert");
  }, []);
  return (
    <div className="flex flex-col h-screen w-screen p-4 items-center bg-[#212121]">
      <div className="w-full flex items-center justify-between p-4">
        <Title weight="1">MazdaxBot</Title>
        <TonConnectButton />
      </div>
      <div className="flex flex-1 flex-col w-full gap-4">
        <Input
          type="number"
          onChange={(e) => setAmount(+e.target.value)}
          value={amount}
          header="Ton Amount"
          before={
            <Image
              src="./ton_symbol.png"
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
    </div>
  );
}

export default App;
