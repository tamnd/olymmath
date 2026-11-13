---
tag: CT0XCT6WS4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209904
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ a $n$ elements group. Find all the functions $f:G\rightarrow \mathbb{N}^*$ such that:

(a) $f(x)=1$ if and only if $x$ is $G$'s identity;

(b) $f(x^k)=\frac{f(x)}{(f(x),k)}$ for any divisor $k$ of $n$, where $(r,s)$ stands for the greatest common divisor of the positive integers $r$ and $s$.
