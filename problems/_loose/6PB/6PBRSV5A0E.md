---
tag: 6PBRSV5A0E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105472
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the universal set $I=\{1,2, \cdots, 2020\}$, and define the sets of positive integers
$$
\begin{array}{l}
W=\left\{w(a, b)=(a+b)+a b \mid a, b \in \mathbf{Z}_{+}\right\}, \\
Y=\left\{y(a, b)=(a+b) \cdot a b \mid a, b \in \mathbf{Z}_{+}\right\},
\end{array}
$$

as the "Wu" set and the "Yue" set, respectively. The intersection of these two sets, $X = W \cap Y$, is called the "Xi Zi number set". Elements in set $X$ are called "Xi Zi numbers". For example,
$$
\begin{array}{l}
54=w(4,10)=y(3,3), \\
56=w(2,18)=y(1,7),
\end{array}
$$

which means 54 and 56 are both Xi Zi numbers.
(1) Find the sum of the largest and smallest elements in the Xi Zi set.
(2) If a number $n$ has at least two different $y(a, b)$ representations, then $n$ is called a "superior number". For example, 30 is a superior number because $30=y(1,5)=y(2,3)$. How many superior numbers are there in set $Y$?
