---
tag: 6R2A1YFGX5
kind: problem
type: answer
answer: a_{n}=10^{(2-3n)(-1)^{n}},b_{n}=10^{(6n-7)(-1)^{n}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the sequences $\left\{a_{n}\right\}, \left\{b_{n}\right\}$, $a_{1}=b_{1}=10, \left\{\begin{array}{l}a_{n+1}=\frac{1}{a_{n} b_{n}} \\ \mathrm{~b}_{\mathrm{n}+1}=a_{n}^{4} \mathrm{~b}_{\mathrm{n}}\end{array}\left(\mathrm{n} \in \mathrm{Z}^{+}\right)\right.$, find $\mathrm{a}_{\mathrm{n}}, \mathrm{~b}_{\mathrm{n}}$.
