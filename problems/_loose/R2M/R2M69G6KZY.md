---
tag: R2M69G6KZY
kind: problem
type: answer
answer: \frac{n^3+n}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170899
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an $n \times n$ table, we write down the numbers $1,2, \ldots, n^{2}$ in sequence:

$$
\begin{array}{cccc}
1 & 2 & \ldots n \\
n+1 & n+2 & \ldots 2 n \\
\vdots & \vdots & \vdots \\
n^{2}-n+1 & n^{2}-n+2 & \ldots n^{2}
\end{array}
$$

From each row, we select one number such that no two are in the same column. What are the possible values of the sum of the selected numbers?
