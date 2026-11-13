---
tag: 85V0DMCSES
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190762
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $f(1), f(2), f(3), \ldots$ is defined by

$$
f(n)=\frac{1}{n}\left(\left[\frac{n}{1}\right]+\left[\frac{n}{2}\right]+\ldots+\left[\frac{n}{n}\right]\right)
$$

Prove that $f(n+1)<f(n)$ for infinitely many natural numbers $n$.

Note. $[x]$ is the greatest integer not greater than $x$, i.e., $[x]=k$ if and only if $k \leq x<k+1$.