---
tag: Z8CJGXHQGP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2055670
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19278
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
In the Bank of Shower, a bored customer lays $n$ coins in a row. Then, each second, the customer performs ``The Process." In The Process, all coins with exactly one neighboring coin heads-up before The Process are placed heads-up (in its initial location), and all other coins are placed tails-up. The customer stops once all coins are tails-up.

Define the function $f$ as follows: If there exists some initial arrangement of the coins so that the customer never stops, then $f(n) = 0$ . Otherwise, $f(n)$ is the average number of seconds until the customer stops over all initial configurations. It is given that whenever $n = 2^k-1$ for some positive integer $k$ , $f(n) > 0$ .

Let $N$ be the smallest positive integer so that $$
M = 2^N \cdot \left(f(2^2-1) + f(2^3-1) + f(2^4-1) + \cdots + f(2^{10}-1)\right)
$$is a positive integer. If $M = \overline{b_kb_{k-1}\cdots b_0}$ in base two, compute $N + b_0 + b_1 + \cdots + b_k$ .

*Proposed by Edward Wan and Brandon Wang*
