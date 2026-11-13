---
tag: WFC2S156YX
kind: problem
type: answer
answer: x\in{-1,-3,3,-7}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87285
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all real numbers $x$ for which

$$
\left\lfloor\frac{x^{2}+1}{x+2}\right\rfloor+\left\lfloor\frac{x-1}{2}\right\rfloor=\frac{x(3 x+1)}{2(x+2)}
$$

For a real number $t, \lfloor t\rfloor$ is the greatest integer not greater than $t$.

For example, if $t=3.14$, then $\lfloor t\rfloor=3$.
