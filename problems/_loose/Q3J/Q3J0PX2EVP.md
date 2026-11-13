---
tag: Q3J0PX2EVP
kind: problem
type: answer
answer: 3+2\sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165741
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider all non-negative numbers $a$ and $b$ such that $0 \leq a < b$, and for all $x$, the function

$$
P(x)=a+b \cos x+\frac{b}{2 \sqrt{2}} \cos 2 x
$$

is non-negative.

Determine the set of possible values for the ratio $\frac{b+a}{b-a}$.
