import { model, Schema } from "mongoose";

interface isell {
  email: string;
  password: string;
  plarFormID: string;
  username: string;
  storeName: string;

  sellerProduct: Array<{}>;
  DispatchProduct: Array<{}>;
}
interface isellData extends isell, Document {}

const sellerModel = new Schema<isellData>({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  plarFormID: {
    type: String,
  },
  username: {
    type: String,
  },
  storeName: {
    type: String,
  },
});
export default model<isellData>("seller", sellerModel);
