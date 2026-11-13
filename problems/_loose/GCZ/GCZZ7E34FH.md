---
tag: GCZZ7E34FH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h86768
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55864
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2006
    source: hf-ai-mo-aops
    label: 2006 All-Russian Olympiad
---
Let $a_1$ , $a_2$ , ..., $a_{10}$ be positive integers such that $a_1<a_2<...<a_{10}$ . For every $k$ , denote by $b_k$ the greatest divisor of $a_k$ such that $b_k<a_k$ . Assume that $b_1>b_2>...>b_{10}$ . Show that $a_{10}>500$ .
