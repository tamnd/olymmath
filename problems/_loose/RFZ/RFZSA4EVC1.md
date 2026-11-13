---
tag: RFZSA4EVC1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118358
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $m$, let $S(m)$ denote the sum of the digits of $m$. For a positive integer $n$, when $n \geq 2$, the function $\mathrm{f}(\mathrm{n})$ represents the smallest positive integer $\mathrm{k}$ such that there exists a set $\mathrm{T}$ of $\mathrm{n}$ positive integers, for any non-empty subset $\mathrm{X}$ of $\mathrm{T}$, we have $\mathrm{S}\left(\sum_{\mathrm{x} \in \mathrm{X}} \mathrm{x}\right)=\mathrm{k}$. Prove: There exist constants $0<\mathrm{c}_{1}<\mathrm{c}_{2}$, such that $\mathrm{c}_{1} \lg \mathrm{n} \leq$ $\mathrm{f}(\mathrm{n}) \leq \mathrm{c}_{2} \lg n$.
