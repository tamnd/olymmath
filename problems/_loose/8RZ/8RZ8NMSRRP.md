---
tag: 8RZ8NMSRRP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1817803
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17434
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219046
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2019
    source: hf-ai-mo-aops
    label: 2019 Caucasus Mathematical Olympiad
---
Determine if there exist positive integers $a_1,a_2,...,a_{10}$ , $b_1,b_2,...,b_{10}$ satisfying the following property: for each non-empty subset $S$ of $\{1,2,\ldots,10\}$ the sum $\sum\limits_{i\in S}a_i$ divides $\left( 12+\sum\limits_{i\in S}b_i \right)$ .
