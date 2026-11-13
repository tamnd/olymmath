---
tag: WNYSM79T6M
kind: problem
type: answer
answer: 2^{2001}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86370
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
6.- Determine the function $f: N \rightarrow N$ (where $N=\{1,2,3, \ldots\}$ is the set of natural numbers) that satisfies, for any $s, n \in N$, the following two conditions:

a) $f(1)=1, f\left(2^{s}\right)=1$.

b) If $n<2^{\text {s }}$, then $f\left(2^{\mathrm{s}}+n\right)=f(n)+1$.

Calculate the maximum value of $f(n)$ when $n \leq 2001$.

Find the smallest natural number $n$ such that $f(n)=2001$.
