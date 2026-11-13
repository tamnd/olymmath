---
tag: 92PFRTPWV5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182301
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is the determinant of a matrix of type 3:

$$
D=\left|\begin{array}{lll}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{array}\right|
$$

where the $a_{ik} (i; k=1,2,3)$ are natural numbers. It is to be shown:

If the numbers $z_{i}=100 a_{i 1}+10 a_{i 2}+a_{i 3}$ are each divisible by a prime number $p$ with $p \neq 2 ; 5$ without a remainder, then $D$ is also divisible by $p$ without a remainder.
