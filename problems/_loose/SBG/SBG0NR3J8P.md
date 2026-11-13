---
tag: SBG0NR3J8P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204635
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a prime $p$ is $n$-$\textit{rephinado}$ if $n | p - 1$ and all $1, 2, \ldots , \lfloor \sqrt[\delta]{p}\rfloor$ are $n$-th residuals modulo $p$, where $\delta = \varphi+1$. Are there infinitely many $n$ for which there are infinitely many $n$-$\textit{rephinado}$ primes?

Notes: $\varphi =\frac{1+\sqrt{5}}{2}$. We say that an integer $a$ is a $n$-th residue modulo $p$ if there is an integer $x$ such that $$x^n \equiv a \text{ (mod } p\text{)}.$$
