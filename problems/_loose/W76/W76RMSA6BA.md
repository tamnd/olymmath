---
tag: W76RMSA6BA
kind: problem
type: answer
answer: 10 < c < 100
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215204
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $a, b,$ and $c$ are distinct positive real numbers such that \begin{align*}abc=1000, \\ bc(1-a)+a(b+c)=110.\end{align*}
If $a<1$, show that $10<c<100$.