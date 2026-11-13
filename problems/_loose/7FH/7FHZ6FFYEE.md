---
tag: 7FHZ6FFYEE
kind: problem
type: answer
answer: \frac{n(n+1)(2n+1)}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=173274
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the following two number sequences:

$$
\begin{array}{cccccc}
1, & 2, & 3, & \ldots, & \mathrm{n}-1, & \mathrm{n}, \\
2 \mathrm{n}-1, & 2 \mathrm{n}-3, & 2 \mathrm{n}-5, & \ldots, & 3, & 1
\end{array}
$$

Calculate the sum of the products of the numbers that are directly above or below each other.
