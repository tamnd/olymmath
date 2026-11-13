---
tag: KCC4N562MA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Romania EGMO TST
    url: https://artofproblemsolving.com/community/c6h2781227
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=397
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204072
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-egmo-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Romania EGMO TST
---
For every positive integer $N\geq 2$ with prime factorisation $N=p_1^{a_1}p_2^{a_2}\cdots p_k^{a_k}$ we define $$f(N):=1+p_1a_1+p_2a_2+\cdots+p_ka_k.$$ Let $x_0\geq 2$ be a positive integer. We define the sequence $x_{n+1}=f(x_n)$ for all $n\geq 0.$ Prove that this sequence is eventually periodic and determine its fundamental period.
