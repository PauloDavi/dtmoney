import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../TransactionsContext';
import { formatCurrency } from '../../utils/formatCurrency';

import { Container, CardSummary } from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws -= transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  );

  return (
    <Container>
      <CardSummary background="shape" color="green">
        <header>
          <span>Entradas</span>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{formatCurrency(summary.deposits)}</strong>
      </CardSummary>

      <CardSummary background="shape" color="red">
        <header>
          <span>Entradas</span>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>{formatCurrency(summary.withdraws)}</strong>
      </CardSummary>

      <CardSummary
        background={summary.total >= 0 ? 'green' : 'red'}
        color="shape"
      >
        <header>
          <span>Entradas</span>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatCurrency(summary.total)}</strong>
      </CardSummary>
    </Container>
  );
}
