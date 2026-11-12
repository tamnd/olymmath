---
tag: BHMXDEARF1
kind: problem
type: answer
answer: f((x))=\frac{6x+4}{5x+4},\quad(f(x))=x+6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24722
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two 7-arithmetic functions

$$
f(x)=\frac{x+5}{5 x+1}, g(x)=\frac{4 x+3}{6 x+3}
$$

Calculate $f(g(x))$ and $g(f(x))$.
