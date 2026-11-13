---
tag: 3HHT8DZ60A
kind: problem
type: answer
answer: (1, 3, 9)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265260
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define three sequences $a_n,b_n,c_n$ as $a_0=b_0=c_0=1$ and
\begin{align*}
a_{n+1}&=a_n+3b_n+3c_n \\
b_{n+1}&=a_n+b_n+3c_n \\
c_{n+1}&=a_n+b_n+c_n
\end{align*}
for $n\geq0$. Let $A,B,C$ be the remainders when $a_{13^4},b_{13^4},c_{13^4}$ are divided by $13$. Find the ordered triple $\left(A,B,C\right)$.

*2019 CCA Math Bonanza Team Round #10*
