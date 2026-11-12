---
tag: Q5TVD5FW9H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h2496092
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20560
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Taiwan TST Round 1
---
Let $n$ be a positive integer. For each $4n$ -tuple of nonnegative real numbers $a_1,\ldots,a_{2n}$ , $b_1,\ldots,b_{2n}$ that satisfy $\sum_{i=1}^{2n}a_i=\sum_{j=1}^{2n}b_j=n$ , define the sets
$$A:=\left\{\sum_{j=1}^{2n}\frac{a_ib_j}{a_ib_j+1}:i\in\{1,\ldots,2n\} \textup{ s.t. }\sum_{j=1}^{2n}\frac{a_ib_j}{a_ib_j+1}\neq 0\right\},$$
$$B:=\left\{\sum_{i=1}^{2n}\frac{a_ib_j}{a_ib_j+1}:j\in\{1,\ldots,2n\} \textup{ s.t. }\sum_{i=1}^{2n}\frac{a_ib_j}{a_ib_j+1}\neq 0\right\}.$$
Let $m$ be the minimum element of $A\cup B$ . Determine the maximum value of $m$ among those derived from all such $4n$ -tuples $a_1,\ldots,a_{2n},b_1,\ldots,b_{2n}$ .

*Proposed by usjl.*
