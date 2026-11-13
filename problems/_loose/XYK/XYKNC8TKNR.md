---
tag: XYKNC8TKNR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence of real numbers $\left\{x_{n}\right\}$ satisfy: $0 \leqslant x_{1}<1$, and for $n \geqslant 1$ we have $x_{n+1}=\left\{\begin{array}{l}0, \text { when } x_{n}=0 \text {, } \\ \frac{1}{x_{n}}-\left[\frac{1}{x_{n}}\right], \text { when } x_{n} \neq 0 \text {, }\end{array}\right.$

Prove that for any natural number $n$ we have
$$
x_{1}+x_{2}+\cdots+x_{n}<\frac{F_{1}}{F_{2}}+\frac{F_{2}}{F_{3}}+\cdots+\frac{F_{n}}{F_{n+1}} \text {, }
$$
