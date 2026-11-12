---
tag: 6RSP6GQN83
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1979 Romania Team Selection Tests
    url: https://artofproblemsolving.com/community/c6h3053410
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1979
    source: hf-ai-mo-aops
    label: 1979 Romania Team Selection Tests
---
Let $M_n$ be the set of permutations $\sigma\in S_n$ for which there exists $\tau\in S_n$ such that the numbers
$$\sigma (1)+\tau(1), \sigma(2)+\tau(2),\ldots,\sigma(n)+\tau(n),$$
are consecutive. Show that $(M_n\neq \emptyset\Leftrightarrow n\text{ is odd})$ and in this case for each $\sigma_1,\sigma_2\in M_n$ the following equality holds:
$$\sum_{k=1}^n k\sigma_1(k)=\sum_{k=1}^n k\sigma_2(k).$$

*Dan Schwarz*
