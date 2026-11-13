---
tag: YR9KY1JPHA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=159273
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f(x, y)$ is a homogeneous polynomial of the $n$th degree in $x$ and $y$. If $f(1,0)=1$ and for all $a, b, c$,
$$
f(a+b, c)+f(b+c, a)+f(c+a, b)=0,
$$
prove that $f(x, y)=(x-2 y)(x+y)^{n-1}$.
