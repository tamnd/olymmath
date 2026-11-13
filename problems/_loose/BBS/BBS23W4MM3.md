---
tag: BBS23W4MM3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1981 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1880695
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55345
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248712
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1981
    source: hf-ai-mo-aops
    label: 1981 All Soviet Union Mathematical Olympiad
---
Find all the sequences of natural $k_n$ with two properties:

a) $k_n \le n \sqrt {n}$ for all $n$ b) $(k_n - k_m)$ is divisible by $(m-n)$ for all $m>n$
