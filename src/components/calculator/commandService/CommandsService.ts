import { Command } from "./Icommand";

export class AddCommand implements Command {
  params: any;
  constructor(params: any){
    this.params=params
  }
  execute() {
    const a = (this.params.a as number) ?? 0;
    const b = (this.params.b as number) ?? 0;
    return Number(a)+ Number(b);
  }
}

export class SubCommand implements Command {
  params: any;
  constructor(params: any){
    this.params=params
  }
  execute() {
    const a = (this.params.a as number) ?? 0;
    const b = (this.params.b as number) ?? 0;
    return Number(a) - Number(b);
  }
}

export class TimesCommand implements Command {
  params: any;
  constructor(params: any){
    this.params=params
  }
  execute() {
    const a = (this.params.a as number) ?? 0;
    const b = (this.params.b as number) ?? 0;
    return Number(a) * Number(b);
  }
}
