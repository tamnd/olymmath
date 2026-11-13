---
tag: 9ZZNS18QY3
kind: problem
type: answer
answer: \frac{}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136595
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $f:(-\infty,+\infty) \rightarrow(0,+\infty)$, such that
$$
f[x-f(y)] \geqslant f(x)+f[f(y)]-a x f(y)-b f(y)-c
$$

holds for all $x, y \in \mathbf{R}$. Prove: $\lim \frac{f(x)}{x^{2}} \leqslant \frac{a}{2}$.
