import { Component, Vue } from "vue-property-decorator";
import Vuetify from "vuetify";
import {
  AddCommand,
  SubCommand,
  TimesCommand,
} from "./commandService/CommandsService";

Vue.use(Vuetify);
@Component({
  name: "CalculatorComponent",
})
export default class CalculatorComponent extends Vue {
  result: number = 0;
  params: { a: number; b: number } = { a: 0, b: 0 };
  private add: AddCommand = new AddCommand();
  private sub: SubCommand = new SubCommand();
  private times: TimesCommand = new TimesCommand();
  resultText: string = "";

  addNumbers() {
    this.executeCommand(this.add, this.params);
  }
  subNumbers() {
    this.executeCommand(this.sub, this.params);
  }
  timesNumbers() {
    this.executeCommand(this.times, this.params);
  }

  executeCommand(command: any, params: any) {
    try {
      console.log(params);

      const result = command.execute(params);
      console.log(result);
      this.resultText = "El resultado es: " + result;
    } catch (error) {
      console.log("error");
    }
  }
}
