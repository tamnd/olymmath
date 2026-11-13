---
tag: P62AEHBKYC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=259985
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let us define a sequence $\{a_n\}_{n\ge 1}$. Define as follows:
$$ a_1=2\text{ and }a_{n+1}=2^{a_n}\text{ for }n\ge 1 $$
Show this :
$$ a_{n}\equiv a_{n-1}\pmod n $$
