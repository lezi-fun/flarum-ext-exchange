import Component from "flarum/Component";
import Link from "flarum/components/Link";
import avatar from "flarum/helpers/avatar";
import username from "flarum/helpers/username";

export default class ExchangeListItem extends Component {
  view() {
    const { userExchangeHistory } = this.attrs;
    const created_at = userExchangeHistory.created_at();
    const money = userExchangeHistory.money();
    const type = userExchangeHistory.type();
    const tx_hash = userExchangeHistory.tx_hash();
    return (
      <tr>
        <td>{created_at}</td>
        <td>{type === 0 ? "能量转积分" : "能量提现"}</td>
        <td>{money}</td>
        <td>
          <a href={`https://www.oklink.com/zh-hans/polygon/tx/${tx_hash}`} target="_blank">
            {tx_hash}
          </a>
        </td>
      </tr>
    );
  }
}
