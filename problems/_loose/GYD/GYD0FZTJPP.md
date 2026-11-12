---
tag: GYD0FZTJPP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 USEMO
    url: https://artofproblemsolving.com/community/c6h2946618
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: usemo/2022
    source: hf-ai-mo-aops
    label: 2022 USEMO
---
Let $\tau(n)$ denote the number of positive integer divisors of a positive integer $n$ (for example, $\tau(2022) = 8$ ). Given a polynomial $P(X)$ with integer coefficients, we define a sequence $a_1, a_2,\ldots$ of nonnegative integers by setting
$$a_n =\begin{cases}\gcd(P(n), \tau (P(n)))&\text{if }P(n) > 00 &\text{if }P(n) \leq0\end{cases}$$
for each positive integer $n$ . We then say the sequence *has limit infinity* if every integer occurs in this sequence only finitely many times (possibly not at all).

Does there exist a choice of $P(X)$ for which the sequence $a_1$ , $a_2$ , . . . has limit infinity?

*Jovan Vuković*
