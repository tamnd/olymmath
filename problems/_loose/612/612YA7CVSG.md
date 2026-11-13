---
tag: 612YA7CVSG
kind: problem
type: answer
answer: a_{n}=2^{n-1},b_{n}=2^{n}+1,c_{n}=3\cdot2^{n-1}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133781
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$\left\{a_{n}\right\},\left\{b_{n}\right\},\left\{c_{n}\right\}$ are three sequences satisfying $a_{1}=1, b_{1}=3, c_{1}=2$ and
$$
\left\{\begin{array}{l}
a_{i+1}=a_{i}+c_{i}-b_{i}+2 \\
b_{i+1}=\frac{1}{2}\left(3 c_{i}-a_{i}+5\right) \\
c_{i+1}=2 a_{i}+2 b_{i}-3 \\
(i=1,2, \cdots)
\end{array}\right.
$$

Find $\left\{a_{n}\right\},\left\{b_{n}\right\},\left\{c_{n}\right\}$.
