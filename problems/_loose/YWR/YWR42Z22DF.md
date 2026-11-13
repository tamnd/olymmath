---
tag: YWR42Z22DF
kind: problem
type: answer
answer: f(x)\geqslantx^{2}+x+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126579
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ be a polynomial function defined on the real number field, $f(0)=1$ and for any $x \cdot y \in \mathbf{R}$, it satisfies
$$
f(x-y)+f(x) \geqslant\left(2 x^{2}-2 x y+y^{2}\right)+2 x-y+2
$$

Try to find $f(x)$.
