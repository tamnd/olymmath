---
tag: GPVXGQH3B1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h37427
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35640
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234161
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1987
    source: hf-ai-mo-aops
    label: 1987 China Team Selection Test
---
Let $r_1=2$ and $r_n = \prod^{n-1}_{k=1} r_i + 1$ , $n \geq 2.$ Prove that among all sets of positive integers such that $\sum^{n}_{k=1} \frac{1}{a_i} < 1,$ the partial sequences $r_1,r_2, ... , r_n$ are the one that gets nearer to 1.
