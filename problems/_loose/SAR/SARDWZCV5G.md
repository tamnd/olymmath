---
tag: SARDWZCV5G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2018
    url: https://artofproblemsolving.com/community/c6h2072487
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57203
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250021
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2018
    source: hf-ai-mo-aops
    label: Russian TST 2018
---
Let $k>1$ be the given natural number and $p\in \mathbb{P}$ such that $n=kp+1$ is composite number. Given that $n\mid 2^{n-1}-1.$ Prove that $n<2^k.$
