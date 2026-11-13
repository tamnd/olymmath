---
tag: 4RNNQT8JYR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1924911
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18246
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219813
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Romania Team Selection Test
---
Let be two natural numbers $ m,n, $ and $ m $ pairwise disjoint sets of natural numbers $ A_0,A_1,\ldots ,A_{m-1}, $ each having $ n $ elements, such that no element of $ A_{i\pmod m} $ is divisible by an element of $ A_{i+1\pmod m} , $ for any natural number $ i. $
Determine the number of ordered pairs $$ (a,b)\in\bigcup_{0\le j < m} A_j\times\bigcup_{0\le j < m} A_j $$ such that $ a|b $ and such that $ \{ a,b \}\not\in A_k, $ for any $ k\in\{ 0,1,\ldots ,m-1 \} . $ *Radu Bumbăcea*
