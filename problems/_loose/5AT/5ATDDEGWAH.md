---
tag: 5ATDDEGWAH
kind: problem
type: answer
answer: f(x)=\cosx+2\sinx
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135048
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function $f(x)$ satisfies: $f(0)=1, f\left(\frac{\pi}{2}\right)=2$, and for any $x, y \in \mathbf{R}$, we have
$$
f(x+y)+f(x-y) \leqslant 2 f(x) \cos y
$$

Try to find $f(x)$.
