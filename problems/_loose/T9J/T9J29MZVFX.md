---
tag: T9J29MZVFX
kind: problem
type: answer
answer: f(x,y)=\sum_{k=0}^{n}a_{k}(x-y)^{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133740
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real-coefficient binary polynomials $f(x, y)$ of degree $n$, such that for any real numbers $x, y$, we have $f(x+1, y+1)=f(x, y)$.
