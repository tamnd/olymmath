---
tag: C9VNJZWGDC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $6 n$ vectors $v_{1}, v_{2}, \cdots, v_{n} \in \mathbf{R}^{n}$, each of length 1, i.e.,
$$
\left|\boldsymbol{v}_{i}\right|=\sqrt{v_{1 i}^{2}+v_{2 i}^{2}+\cdots+v_{n i}^{2}}=1 \text {. }
$$

Prove: There exist $\varepsilon_{1}, \varepsilon_{2}, \cdots, \varepsilon_{n} \in\{1,-1\}$, such that
$$
\left|\varepsilon_{1} v_{1}+\varepsilon_{2} v_{2}+\cdots+\varepsilon_{n} v_{n}\right| \leqslant \sqrt{n} \text {. }
$$
