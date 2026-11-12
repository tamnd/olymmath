---
tag: 5HD4WPXGZE
kind: problem
type: answer
answer: "2021"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14741
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the board, 2020 quadratic equations are written:

$$
\begin{gathered}
2020 x^{2} + b x + 2021 = 0 \\
2019 x^{2} + b x + 2020 = 0 \\
2018 x^{2} + b x + 2019 = 0 \\
\ldots \\
x^{2} + b x + 2 = 0
\end{gathered}
$$

(each subsequent equation is obtained from the previous one by decreasing the leading coefficient and the constant term by one). Find the product of the roots of all the equations written on the board, given that each of them has two real roots.
