---
tag: WZ1AMZVK34
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=28789
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Czechoslovakia, 52; England, 65). In an infinite "triangular" table

$$
\begin{aligned}
& a_{1,0} \Leftrightarrow \&, \\
& a_{2,-1} a_{2,0} a_{2, i} \\
& a_{3,-2} a_{3,-1} a_{3,0} a_{3,1} a_{3,2} \\
& a_{4,-3} a_{4,-2} a_{4,-1} a_{4,0} a_{4,1} a_{4,2} a_{4,3}
\end{aligned}
$$

$a_{i, 0}=1$, and each number $a_{n, k}$, located in the $n$-th row $(n \in \mathbf{N}, n>1)$ at the $k$-th position $(k \in \mathbf{Z},|k|<n)$, is equal to the sum of
$a_{n-1, k-1}+a_{n-1, k}+a_{n-1, k+1}$ of three numbers from the previous row (if any of these numbers are absent in the table, they are replaced by zero in the sum). Prove that in each row, starting from the "third", there is at least one even number.
