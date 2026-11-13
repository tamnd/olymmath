---
tag: A2H5GY57DR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Czech-Polish-Slovak Match
    url: https://artofproblemsolving.com/community/c6h3101706
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22593
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223741
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caps/2023
    source: hf-ai-mo-aops
    label: 2023 Czech-Polish-Slovak Match
---
Let $a_1, a_2, \ldots, a_n$ be reals such that for all $k=1,2, \ldots, n$ , $na_k \geq a_1^2+a_2^2+ \ldots+a_k^2$ . Prove that there exist at least $\frac{n} {10}$ indices $k$ , such that $a_k \leq 1000$ .
