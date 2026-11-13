---
tag: N1PP8GRXX8
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241930
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $f(x)$ satisfies $f(x)=f\left(\frac{c}{x}\right)$ for some real number $c(>1)$ and all positive number $x$.

If $\int_1^{\sqrt{c}} \frac{f(x)}{x} dx=3$, evaluate $\int_1^c \frac{f(x)}{x} dx$
