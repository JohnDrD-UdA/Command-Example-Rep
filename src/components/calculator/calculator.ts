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
  resultText: string = "";

  addNumbers() {
    this.executeCommand(new AddCommand(this.params));
  }
  subNumbers() {
    this.executeCommand(new SubCommand(this.params));
  }
  timesNumbers() {
    this.executeCommand(new TimesCommand(this.params));
  }

  executeCommand(command: any) {
    try {

      const result = command.execute();
      console.log(result);
      this.resultText = "El resultado es: " + result;
    } catch (error) {
      console.log("error");
    }
  }
}
