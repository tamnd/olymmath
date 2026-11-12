---
tag: 5433RRTDNK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 CMIMC Team
    url: https://artofproblemsolving.com/community/c6h1374845
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70694
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2017
    source: hf-ai-mo-aops
    label: 2017 CMIMC Team
---
Define $\{p_n\}_{n=0}^\infty\subset\mathbb N$ and $\{q_n\}_{n=0}^\infty\subset\mathbb N$ to be sequences of natural numbers as follows:

- $p_0=q_0=1$ ;
- For all $n\in\mathbb N$ , $q_n$ is the smallest natural number such that there exists a natural number $p_n$ with $\gcd(p_n,q_n)=1$ satisfying $$\dfrac{p_{n-1}}{q_{n-1}} < \dfrac{p_n}{q_n} < \sqrt 2.$$

Find $q_3$ .
