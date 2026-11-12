---
tag: T6BAHMATMQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33684
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) Show that each number $x \in [0,1]$ admits a representation of the form

$$
x=\sum_{n=1}^{\infty} \frac{x_{n}}{3^{n}}
$$

where $x_{n} \in \{0,1,2\}, n \geqslant 1$.

(b) Show that if for $x$ there are two representations $x=\sum_{n \geqslant 1} \frac{x_{n}}{3^{n}}$ and $x=\sum_{n \geqslant 1} \frac{y_{n}}{3^{n}}$ with non-terminating series, i.e., $\sum_{n \geqslant 1}\left|x_{n}\right|=\infty$ and $\sum_{n \geqslant 1}\left|y_{n}\right|=\infty$, then $x_{n}=y_{n}, n \geqslant 1$. In other words, there is "uniqueness of non-terminating representations."

Note that non-uniqueness is possible when there is a terminating representation $x=\sum_{n=1}^{m} \frac{x_{n}}{3^{n}}$. In this case, the "canonical" representation $\sum_{n \geqslant 1} \frac{y_{n}}{3^{n}}$ is chosen as follows:

1) If $x=\sum_{n=1}^{m-1} \frac{x_{n}}{3^{n}}+\frac{2}{3^{m}}$, then

$$
y_{n}= \begin{cases}x_{n}, & n \leqslant m-1 \\ 2, & n=m \\ 0, & n \geqslant m+1\end{cases}
$$

2) If $x=\sum_{n=1}^{m-1} \frac{x_{n}}{3^{n}}+\frac{1}{3^{m}}$, then

$$
y_{n}= \begin{cases}x_{n}, & n \leqslant m-1 \\ 0, & n=m \\ 2, & n \geqslant m+1\end{cases}
$$

(c) The Cantor set $\mathscr{C}$ in $[0,1]$ is defined as the closed set constructed by the following procedure. Start with the interval $[0,1]$, and remove the "middle" interval, i.e., the interval whose midpoint coincides with the midpoint of the initial interval and whose length is one-third of the initial interval. This results in two intervals, from each of which the "middle" interval is also removed, and so on, infinitely. The result is a closed set $\mathscr{C}$ of Lebesgue measure zero.

Show that

$$
\mathscr{C}=\left\{x=\sum_{n=1}^{\infty} \frac{x_{n}}{3^{n}}: x_{n} \in \{0,2\}, n \geqslant 1\right\}
$$

(d) Establish that the Cantor set $\mathscr{C}$ with the Euclidean metric is homeomorphic to the space of sequences $\{0,1\}^{\infty}$ with the metric

$$
d(x, y)=\sum_{n \geqslant 1} \frac{\left|x_{n}-y_{n}\right|}{2^{n}}, x, y \in \{0,1\}^{\infty}
$$

In other words, there exists a bijective map $\varphi: \mathscr{C} \rightarrow \{0,1\}^{\infty}$ such that $\varphi$ and $\varphi^{-1}$ are continuous.

Remark. It is interesting to note that if we consider the decimal expansions of points $x$ in the Cantor set $\mathscr{C}$, there are (see [108]) only 14 numbers with terminating representations. These numbers are

$$
\frac{1}{4}, \frac{3}{4}, \frac{1}{10}, \frac{3}{10}, \frac{7}{10}, \frac{9}{10}, \frac{1}{40}, \frac{3}{40}, \frac{9}{40}, \frac{13}{40}, \frac{27}{40}, \frac{31}{40}, \frac{37}{40}, \frac{39}{40}.
$$
