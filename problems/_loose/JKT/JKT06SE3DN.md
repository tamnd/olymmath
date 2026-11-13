---
tag: JKT06SE3DN
kind: problem
type: answer
answer: \frac{1}{4},\text{when}n\text{iseven;}\frac{n^{2}-1}{4n^{2}},\text{when}n\text{isodd.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93845
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}, \cdots, x_{n}$ take values in some interval of length 1, and let
$$
\begin{array}{l}
x=\frac{1}{n} \sum_{j=1}^{n} x_{j}, \\
y=\frac{1}{n} \sum_{j=1}^{n} x_{j}^{2} .
\end{array}
$$

Find the maximum value of $f=y-x^{2}$.
