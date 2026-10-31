---
tag: GT0MT737EC
kind: solution
problem: F5HH9B840R
origin: human
author:
  display: user90184
source: mathse
url: https://math.stackexchange.com/a/1800629
zone: Z1
lang: en
complete: false
---
Clearly $k > 1$; otherwise $p(x) = x^5$ and $m_1, \ldots, m_5$ are not distinct. Assume $k = 2$, so $p(x) = x^5 + ax^j$ with $0 \le j \le 4$. We can not have $j \ge 2$ since then at least two of the $m_l$'s are equal to $0$. Hence $p(x) = x^5 + a$ or $p(x) = x(x^4 + a)$ with $a \neq 0$. But $x^5 + a$ and $x^4 + a$ have at most two real zeros. Therefore $k \ge 3$.

Set $m_1 = -2$, $m_2 = -1$, $m_3 = 0$, $m_4 = 1$, $m_5 = 2$. Then$$p(x) = x(x^2 - 1)(x^2 - 4) = x^5 - 5x^3 + 4x.$$Hence $k = 3$, and this value of $k$ is achieved for the given $m_l$'s.
