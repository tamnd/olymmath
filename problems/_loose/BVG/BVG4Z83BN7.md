---
tag: BVG4Z83BN7
kind: problem
type: answer
answer: f(x)=\binom{n}{x}p^{x}(1-p)^{n-x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186048
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the investigation of frequency distributions in mathematical statistics, functions appear that are defined for finitely many natural numbers and are required to satisfy so-called functional equations (equations between different function values).

An example of this is the following:

Given a natural number $n \geq 2$ and a real number $p$ with $0<p<1$.

Determine (in dependence on $n$ and $p$) those functions $f$ with the set $\{1,2, \ldots, n\}$ as the domain, which for $k=1,2, \ldots, n$ satisfy the following equation (1):

$$
\sum_{x=0}^{n} x \cdot(x-1) \cdot(x-2) \cdot \ldots \cdot(x-k+1) \cdot f(x)=n \cdot(n-1) \cdot(n-2) \cdot \ldots \cdot(n-k+1) \cdot p^{k}
$$
