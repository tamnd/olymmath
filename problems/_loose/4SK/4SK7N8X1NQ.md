---
tag: 4SK7N8X1NQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210881
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define for positive integer $n$, a function $f_n(x)=\frac{\ln x}{x^n}\ (x>0).$ In the coordinate plane, denote by $S_n$ the area of the figure enclosed by $y=f_n(x)\ (x\leq t)$, the $x$-axis and the line $x=t$ and denote by $T_n$ the area of the rectagle with four vertices $(1,\ 0),\ (t,\ 0),\ (t,\ f_n(t))$ and $(1,\ f_n(t))$.

(1) Find the local maximum $f_n(x)$.

(2) When $t$ moves in the range of $t>1$, find the value of $t$ for which $T_n(t)-S_n(t)$ is maximized.

(3) Find $S_1(t)$ and $S_n(t)\ (n\geq 2)$.

(4) For each $n\geq 2$, prove that there exists the only $t>1$ such that $T_n(t)=S_n(t)$.

Note that you may use $\lim_{x\to\infty} \frac{\ln x}{x}=0.$
