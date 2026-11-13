---
tag: 7APB3MDQRM
kind: problem
type: answer
answer: b = 0, \quad c = 0, \quad a \neq 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208617
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A=\left(
\begin{array}{ccc}
1 & 1& 0 \\
0 & 1& 0 \\
0 &0 & 2
\end{array}
\right),\ B=\left(
\begin{array}{ccc}
a & 1& 0 \\
b & 2& c \\
0 &0 & a+1
\end{array}
\right)\ (a,\ b,\ c\in{\mathbb{C}}).$

(1) Find the condition for $a,\ b,\ c$ such that ${\text{rank} (AB-BA})\leq 1.$

(2) Under the condition of (1), find the condition for $a,\ b,\ c$ such that $B$ is diagonalizable.
