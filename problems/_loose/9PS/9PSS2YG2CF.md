---
tag: 9PSS2YG2CF
kind: problem
type: answer
answer: \frac{1}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179132
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal{C}$ be the set of functions $f:[0,1] \rightarrow \mathbb{R}$, twice differentiable on $[0,1]$, which have at least two zeros, not necessarily distinct, in $[0,1]$, and $\left|f^{\prime \prime}(x)\right| \leq 1$ for all $x$ in $[0,1]$. Determine the maximum value that the integral

$$
\int_{0}^{1}|f(x)| \mathrm{d} x
$$

can take as $f$ ranges over the set $\mathcal{C}$, and the functions that achieve this maximum.

(A function $f$ has two zeros at the same point $a$ if $f(a)=f^{\prime}(a)=0$.)
