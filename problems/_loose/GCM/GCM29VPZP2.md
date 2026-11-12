---
tag: GCM29VPZP2
kind: problem
type: answer
answer: 81,60,46
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1895
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ be the number of coins in the treasure. Then the number of remaining coins $N$ in the morning is

$$
\begin{gathered}
N=\frac{2}{3}\left(\frac{2}{3}\left(\frac{2}{3}(m-1)-1\right)-1\right)=\frac{2^{3}}{3^{3}}(m-1)-\frac{2}{3}-\frac{2^{2}}{3^{2}} \\
N=\frac{2^{3}}{3^{3}}(m-1)-\frac{10}{9}=3 n \\
8(m-1)-30=81 k, \text { then }\left\{\begin{array}{c}
m-1=3 t, \\
8 t-27 k=10
\end{array},\left\{\begin{array}{c}
m=3 t+1 \\
k=2 s \\
4 t-27 s=5
\end{array}\right.\right. \\
\left\{\begin{array}{c}
m=3 t+1 \\
k=2 s, \\
t=8+27 u, \\
s=1+4 u
\end{array}\right.
\end{gathered}
$$

Considering the constraints

$$
\begin{gathered}
110 \leq 81 u+25 \leq 200, \text { so } u=2, m=187 . \\
m_{1}=1+\frac{187-1}{3}=63, \widetilde{m}_{1}=63+18=81 \\
- \text { the money of the first pirate; } \\
m_{2}=1+\frac{187-63-1}{3}=42, \widetilde{m}_{2}=42+18=60 \\
m_{3}=1+\frac{187-63-42-1}{3}=28, \widetilde{m}_{3}=28+18=46 \\
- \text { the money of the third pirate; } \\
m_{0}=\frac{187-63-42-28}{3}=18 \\
\text {- the money each received in the morning. }
\end{gathered}
$$
