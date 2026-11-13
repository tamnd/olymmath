---
tag: BT6EYS937X
kind: problem
type: answer
answer: \frac{1}{3}[2^{n-1}-(-1)^{n-1}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134078
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of numbers where all terms are 0 or 1 is called a 0,1 sequence. Let $A$ be a finite 0,1 sequence, and let $f(A)$ denote the 0,1 sequence obtained by changing each 1 in $A$ to 0,1 and each 0 to 1,0. For example, $f((1,0,0,1))=(0,1,1,0,1,0,0,1)$, and let $f^{n}(A)$ denote $f(f(\cdots f(A) \cdots))(n$ times $f)$.
Try to find: In $f^{n}((1))$, how many pairs of consecutive terms are 0?
