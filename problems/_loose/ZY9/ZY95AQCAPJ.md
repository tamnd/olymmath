---
tag: ZY95AQCAPJ
kind: problem
type: answer
answer: p(x)=C(x^{2}+x+2)x(x-1)(x+1)(x-2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real-coefficient polynomials $p(x)$ satisfying
$$
\begin{array}{l}
\left(x^{3}+2 x^{2}+3 x+2\right) p(x-1) \\
=\left(x^{3}-4 x^{2}+5 x-6\right) p(x)
\end{array}
$$
