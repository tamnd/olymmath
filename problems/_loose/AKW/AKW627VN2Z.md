---
tag: AKW627VN2Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=18922
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Do there exist pairwise distinct natural numbers $a, b$, and $c$ such that

$$
2 a+\operatorname{LCM}(b, c)=2 b+\operatorname{LCM}(a, c)=2 c+\operatorname{LCM}(a, b) ?
$$

(S. Berlov, A. Kuznetsov)
