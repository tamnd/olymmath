---
tag: FFQ1AHMKMS
kind: problem
type: answer
answer: '{},\in(-\infty;\infty)'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=19834
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
When processing numerical data, it is often necessary to calculate the arithmetic mean

$$
S(x, y)=(x+y) / 2
$$

and solve equations containing the arithmetic mean. Find all finite (consisting of a finite number of elements) numerical sets $X$ such that for any $a$ and $b$ from $X$ the set $X$ contains the root $x$ of the equation

$$
S(a, x)=b
$$
