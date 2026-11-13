---
tag: DZ9ZFKG0VD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1981 Spain Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2983291
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59885
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251986
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome/1981
    source: hf-ai-mo-aops
    label: 1981 Spain Mathematical Olympiad
---
Given a nonzero natural number $n$ , let $f_n$ be the function of the closed interval $[0, 1]$ in $R$ defined like this: $$ f_n(x) = \begin{cases}n^2x, \,\, if \,\, 0 \le x < 1/n 3/n, \,\, if \,\, 1/n \le x \le 1 \end{cases} $$
a) Represent the function graphically.
b) Calculate $A_n =\int_0^1 f_n(x) dx$ .
c) Find, if it exists, $\lim_{n\to \infty} A_n$ .
