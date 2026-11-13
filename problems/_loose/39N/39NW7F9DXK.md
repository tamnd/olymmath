---
tag: 39NW7F9DXK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269087
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{F_n\}_{n\in\mathbb{Z}}$ and $\{L_n\}_{n\in\mathbb{Z}}$ denote the Fibonacci and Lucas numbers, respectively, given by $$F_{n+1} = F_n + F_{n-1}\ \text{and}\ L_{n+1} = L_n + L_{n-1}\ \text{for all}\ n \geq 1$$with $F_0 = 0$, $F_1 = 1$, $L_0 = 2$, and $L_1 = 1$. Prove that for integers $n \geq 1$ and $j \geq 0$

- $\sum \limits_{k=1}^n F_{k\pm j}L_{k\mp j}=F_{2n+1}-1+\begin{cases}
0, & \text{if}\ n\ \text{is even}\\
\left(-1\right)^{\pm j}F_{\pm 2j}, & \text{if}\ n\ \text{is odd}
\end{cases}$

- $\sum \limits_{k=1}^nF_{k+j}F_{k-j}L_{k+j}L_{k-j}=\frac{F_{4n+2}-1-nL_{4j}}{5}$
