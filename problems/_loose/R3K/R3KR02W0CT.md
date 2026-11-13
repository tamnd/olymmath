---
tag: R3KR02W0CT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117473
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $m$, let $S(m)$ denote the sum of the digits of $m$. For $n \geqslant 2$, let $f(n)$ denote the smallest positive integer $k$ such that there exists a set $S$ of $n$ positive integers, for which, for any non-empty subset $X$ of $S$,
$$
S\left(\sum_{x \in X} x\right)=k .
$$

Prove: There exist constants $0<c_{1}<c_{2}$, such that $c_{1} \log _{10} n<f(n)<c_{2} \log _{10} n$.
