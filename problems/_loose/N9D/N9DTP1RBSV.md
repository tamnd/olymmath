---
tag: N9DTP1RBSV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=92
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
a) Consider $n$ coprime natural numbers greater than $1$ like $d_1, d_2, \dots, d_n$ and arbitrary natural numbers $r_1, r_2, \dots, r_n$. Prove that there exists a natural number $x$, $1 \le x \le 3^n$, that satisfies the following system of modular inequalities:
$$
\begin{array}{l}
x \not\equiv r_1 \pmod{d_1} \\
x \not\equiv r_2 \pmod{d_2} \\
\vdots \\
x \not\equiv r_n \pmod{d_n}
\end{array}
$$

b) For each real number $\epsilon > 0$, prove that there exists a number $N$ such that for each natural number $n > N$ and natural numbers $d_1, d_2, \dots, d_n$ and $r_1, r_2, \dots, r_n$, where $d_i$'s ($1 \le i \le n$) are coprime, the above system of inequalities has a solution $x$ that $1 \le x \le (2 + \epsilon)^n$.
