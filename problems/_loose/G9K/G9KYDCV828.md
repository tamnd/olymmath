---
tag: G9KYDCV828
kind: problem
type: answer
answer: a_{n}=\frac{1}{3}+(\frac{1}{2})^{n}+\frac{1}{3}(\frac{1}{2})^{2n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91498
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $a_{1}, a_{2}, a_{3}, \cdots$ satisfy: $a_{1}=1, a_{n+1}=\frac{1}{16}\left(1+4 a_{n}+\sqrt{1+24 a_{n}}\right), n=$ $1,2, \cdots$ Find the general term formula.
