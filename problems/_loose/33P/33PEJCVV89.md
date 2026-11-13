---
tag: 33PEJCVV89
kind: problem
type: answer
answer: f(x)=\frac{}{x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the continuous function $f(x)$ be defined everywhere except at 0, satisfying
$$
\frac{1}{f(x+y)} \leqslant \frac{f(x)+f(y)}{f(x) f(y)},
$$

and at $x \neq 0$, $f(x) \neq 0$, $\lim f(x)=\infty$, then $f(x)=\frac{a}{x}, a \neq 0$.
