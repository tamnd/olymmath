---
tag: XM3WPZ33EY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38390
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35709
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1997
    source: hf-ai-mo-aops
    label: 1997 China Team Selection Test
---
Find all real-coefficient polynomials $f(x)$ which satisfy the following conditions:**i.** $f(x) = a_0 x^{2n} + a_2 x^{2n - 2} + \cdots + a_{2n - 2}
x^2 + a_{2n}, a_0 > 0$ ;**ii.** $\sum_{j=0}^n a_{2j} a_{2n - 2j} \leq \left(
\begin{array}{c}
2n
n\end{array} \right) a_0 a_{2n}$ ;**iii.** All the roots of $f(x)$ are imaginary numbers with no real part.
