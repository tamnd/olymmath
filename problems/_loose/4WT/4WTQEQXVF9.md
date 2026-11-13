---
tag: 4WTQEQXVF9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210960
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose a matrix $A=\left(
\begin{array}{cc}
a & b \\
c & d
\end{array}
\right)$ satifies the condition $D$ as follows:

$(D)$ The elements, $a,\ b,\ c,\ d$, of $A$ are integers and four points $(0,\ 0),\ (a,\ b),\ (a+c,\ b+d),\ (c,\ d)$ form the vertices of the pararellogram with area 1.

Let $B=\left(
\begin{array}{cc}
1 & 1 \\
0 & 1
\end{array}
\right)$. Answer the following questions:

(1) Matrices $BA$ and $B^{-1}A$ satisfy the condition $D$ as well.

(2) If $c=0$, then multiplying $A$ with $B$ or $B^{-1}$ from left hand side in turn will fall under any of the following four matrices:

$\left(
\begin{array}{cc}
1 & 0 \\
0 & 1
\end{array}
\right), \ \left(
\begin{array}{cc}
-1 & 0 \\
0 & 1
\end{array}
\right),\
\left(
\begin{array}{cc}
1 & 0 \\
0 & -1
\end{array}
\right),\
\left(
\begin{array}{cc}
-1 & 0 \\
0 & -1
\end{array}
\right)$.

(3) Let $|a|\geq |c|>0$. Prove that at least of either $BA$ or $B^{-1}A$, denote by $\left(
\begin{array}{cc}
x & y\\
z & w
\end{array}
\right)$ the either matrix, satisfies $|x|+|z|<|a|+|c|$.
