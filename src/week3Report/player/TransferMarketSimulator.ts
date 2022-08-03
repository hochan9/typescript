export class TransferMarketSimulator {
    private static instance: TransferMarketSimulator;

    private constructor() {
    }

    static getInstance(): TransferMarketSimulator {
        if (!TransferMarketSimulator.instance) {
            TransferMarketSimulator.instance = new TransferMarketSimulator();
        }

        return TransferMarketSimulator.instance;
    }

    simulate(): void {
        console.log("황석규 강원 FC 이적 완료");
    }
}