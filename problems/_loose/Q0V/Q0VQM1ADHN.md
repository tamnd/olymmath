---
tag: Q0VQM1ADHN
kind: problem
type: answer
answer: f(x)=-\frac{x}{1+x};f(x)=x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Adapted from the 26th International Mathematical Olympiad 1994) Let $f:(-1,+\infty) \rightarrow (-1,+\infty)$ be a continuous and monotonic function, with $f(0)=0$, and satisfying
$$
f[x+f(y)+x f(y)] \geqslant y+f(x)+y f(x) \text {, for } \forall x, y \in(-1,+\infty),
$$

Find $f(x)$.
