---
tag: 5KJBCXRF2T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h249164
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40039
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2008
    source: hf-ai-mo-aops
    label: 2008 Germany Team Selection Test
---
Determine $ Q \in \mathbb{R}$ which is so big that a sequence with non-negative reals elements $ a_1 ,a_2, \ldots$ which satisfies the following two conditions:

**(i)** $ \forall m,n \geq 1$ we have $ a_{m + n} \leq 2 \left(a_m + a_n \right)$
**(ii)** $ \forall k \geq 0$ we have $ a_{2^k} \leq \frac {1}{(k + 1)^{2008}}$

such that for each sequence element we have the inequality $ a_n \leq Q.$
