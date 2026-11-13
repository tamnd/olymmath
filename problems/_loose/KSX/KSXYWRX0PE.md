---
tag: KSXYWRX0PE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146828
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Polynomial
$$
f(x)=a_{n} x^{n}+a_{n-1} x^{n-1}+\cdots+a_{1} x+a_{0} .
$$

If there exist $n+1$ consecutive integers $m, m+1, \cdots, m+n$, such that $f(m+k) \in \mathbf{Z}(k=0,1, \cdots, n)$, then $f(x)$ is an integer-valued polynomial (when $x \in \mathbf{Z}$, $f(x) \in \mathbf{Z})$.
