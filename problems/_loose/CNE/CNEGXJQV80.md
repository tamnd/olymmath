---
tag: CNEGXJQV80
kind: problem
type: answer
answer: f(x) = c
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247018
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all continuous and nondecreasing functions $ f:[0,\infty)\longrightarrow\mathbb{R} $ that satisfy the inequality:
$$ \int_0^{x+y} f(t) dt\le \int_0^x f(t) dt +\int_0^y f(t) dt, \forall x,y\in [0,\infty) . $$
