---
tag: 8A6VT2D5ED
kind: problem
type: answer
answer: f(x)=^{3}+^{2}++where=0,b\geqslant0,\in{R},>0,8b^{3}>243^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93086
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $f(x)$ of degree at most three that satisfy the following condition: for any $x, y \geqslant 0$,
$$
f(x+y)>f(x)+f(y) .
$$
