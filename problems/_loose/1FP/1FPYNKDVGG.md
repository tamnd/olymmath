---
tag: 1FPYNKDVGG
kind: problem
type: answer
answer: \frac{n(n^{2}+1)}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96832
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
144 From the $n \times n$ array
$$
\left[\begin{array}{ccccc}
1 & 2 & 3 & \cdots & n \\
n+1 & n+2 & n+3 & \cdots & 2 n \\
2 n+1 & 2 n+2 & 2 n+3 & \cdots & 3 n \\
\cdots & \cdots & \cdots & \cdots & \cdots \\
(n-1) n+1 & (n-1) n+2 & (n-1) n+3 & \cdots & n^{2}
\end{array}\right]
$$

select $x_{1}$, delete the row and column containing $x_{1}$, then select a number $x_{2}$ from the new array, and delete the row and column containing $x_{2}$. Continue this process until only one number $x_{n}$ remains. Then the value of $x_{1}+x_{2}+\cdots+x_{n}$ is . $ $
