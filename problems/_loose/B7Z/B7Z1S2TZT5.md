---
tag: B7Z1S2TZT5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h247843
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35901
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2007
    source: hf-ai-mo-aops
    label: 2007 China Team Selection Test
---
Let $ x_1, \ldots, x_n$ be $ n>1$ real numbers satisfying $ A=\left |\sum^n_{i=1}x_i\right |\not =0$ and $ B=\max_{1\leq i<j\leq n}|x_j-x_i|\not =0$ . Prove that for any $ n$ vectors $ \vec{\alpha_i}$ in the plane, there exists a permutation $ (k_1, \ldots, k_n)$ of the numbers $ (1, \ldots, n)$ such that $$ \left |\sum_{i=1}^nx_{k_i}\vec{\alpha_i}\right | \geq \dfrac{AB}{2A+B}\max_{1\leq i\leq n}|\alpha_i|.$$
