---
tag: W38FSCEQS0
kind: problem
type: answer
answer: n\leq3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185995
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
All natural numbers $n$ are to be determined that have the following property:

For all real numbers $a$ and $b$ with $0<a<b$ it holds that

$$
a+\frac{1}{1+a^{n}}<b+\frac{1}{1+b^{n}}
$$
