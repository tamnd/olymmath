---
tag: SKK24AA1DG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are to investigate whether for every natural number $n \geq 1$ there exists a function $f$ that satisfies the following conditions:

(1) The function $f$ is defined for all real numbers $x$.

(2) There exists a real number $x$ such that $f(x) \neq 0$.

(3) If functions $f_{1}, f_{2}, \ldots, f_{n+1}$ are defined by the stipulations that for all real $x$,

$$
f_{1}(x)=f(x) \text { and } f_{k+1}(x)=f\left(f_{k}(x)\right) \text { for } k=1,2, \ldots, n
$$

then for all real $x$ the equation

$$
\sum_{k=1}^{n} f_{k}(x)=f_{n+1}(x)
$$

holds.
