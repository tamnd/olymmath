---
tag: C3RQNGGR09
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X_{1}, \ldots, X_{n}$ be i.i.d. random variables. Associate with these variables the rank (order) statistics $X_{1}^{(n)}, \ldots, X_{n}^{(n)}$, obtained by arranging the values $X_{1}, \ldots, X_{n}$ in a non-decreasing order. (So $X_{1}^{(n)}=\min \left(X_{1}, \ldots, X_{n}\right), \ldots$, $X_{n}^{(n)}=\max \left(X_{1}, \ldots, X_{n}\right)$. We agree that if $X_{i_{1}}=\ldots=X_{i_{k}}=\min \left(X_{1}, \ldots, X_{k}\right)$ and $i_{1}<\ldots<i_{k}$, then $X_{1}^{(n)}$ is taken to be the value $X_{i_{1}}$. Similar conventions apply in other cases.)

Although the variables $X_{1}, \ldots, X_{n}$ were independent, the order statistics $X_{1}^{(n)}, \ldots, X_{n}^{(n)}$ will be dependent.

Show that in the case where the variables $X_{i}$ take only two values, the order statistics form a Markov chain. Provide an example showing that in the case of variables $X_{i}$ with three values, the Markov property may not hold.
