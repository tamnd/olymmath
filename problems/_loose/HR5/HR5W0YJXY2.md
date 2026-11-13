---
tag: HR5W0YJXY2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97420
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(IMO-28 Preliminary Problem) Let $x_{1}, x_{2}, \cdots, x_{n}$ be $n$ integers, and $k$ be an integer less than $n$. Define
$$
\begin{array}{l}
S_{1}=x_{1}+x_{2}+\cdots+x_{k}, T_{1}=x_{k+1}+x_{k+2}+\cdots+x_{n}, \\
S_{2}=x_{2}+x_{3}+\cdots+x_{k+1}, T_{2}=x_{k+2}+x_{k+3}+\cdots+x_{n}+x_{1}, \\
S_{3}=x_{3}+x_{4}+\cdots+x_{k+2}, T_{3}=x_{k+3}+x_{k+4}+\cdots+x_{1}+x_{2}, \\
\cdots \cdots \\
S_{n}=x_{n}+x_{1}+\cdots+x_{k-1}, T_{n}=x_{k}+x_{k+1}+\cdots+x_{n-1},
\end{array}
$$
( $x_{i}$ appears cyclically, with $x_{1}$ reappearing after $x_{n}$). Let $m(a, b)$ be the number of $i$ such that $S_{i}$ leaves a remainder of $a$ when divided by 3, and $T_{i}$ leaves a remainder of $b$ when divided by 3, where $a, b$ are 0, 1, or 2.
Prove that $m(1,2)$ and $m(2,1)$ leave the same remainder when divided by 3.
