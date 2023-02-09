import KeypairNode from "./Crypto/Keypair";
import GetTokenDetailsNode from "./Explorer/GetTokenDetails";
import GetPriceNode from "./Functions/GetPrice";
import ButtonInputNode from "./Input/ButtonInput";
import IntegerInputNode from "./Input/IntegerInput";
import StringInputNode from "./Input/StringInput";
import AddNode from "./Math/AddNode";
import ColorOutputNode from "./Output/ColorOutput";
import TextOutputNode from "./Output/TextOutput";

export const nodeTypes = {
  stringInput: StringInputNode,
  integerInput: IntegerInputNode,
  buttonInput: ButtonInputNode,
  textOutput: TextOutputNode,
  colorOutput: ColorOutputNode,
  getTokenDetails: GetTokenDetailsNode,
  keypair: KeypairNode,
  add: AddNode,
  getPrice: GetPriceNode
}