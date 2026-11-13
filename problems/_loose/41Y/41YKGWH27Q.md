---
tag: 41YKGWH27Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267043
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function f is defined on the set of integers and satisfies
$\bullet$ $f(n) = n - 2$, if $n \ge 2005$
$\bullet$ $f(n) = f(f(n+7))$, if $n < 2005$.
Find $f(3)$.
