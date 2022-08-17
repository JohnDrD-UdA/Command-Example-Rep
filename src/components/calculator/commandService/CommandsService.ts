import { Command } from "./Icommand";

export class AddCommand implements Command {
  execute(params: any) {
    const a: number = params.a ?? 0;
    const b: number = params.b ?? 0;
    return Number(a) + Number(b);
  }
}

export class SubCommand implements Command {
  execute(params: any) {
    const a = (params.a as number) ?? 0;
    const b = (params.b as number) ?? 0;
    return Number(a) - Number(b);
  }
}

export class TimesCommand implements Command {
  execute(params: any) {
    const a = (params.a as number) ?? 0;
    const b = (params.b as number) ?? 0;
    return Number(a) * Number(b);
  }
}
