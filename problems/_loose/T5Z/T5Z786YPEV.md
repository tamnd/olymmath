---
tag: T5Z786YPEV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33963
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left\{X_{n}\right\}_{n \geqslant 1}$ be i.i.d. random variables, and

$$
S_{0}=0, S_{n}=X_{1}+\ldots+X_{n}, n \geqslant 1
$$

Let also $\mathscr{R}_{n}$ be the range, i.e., the number of distinct values taken by the variables $S_{0}, S_{1}, \ldots, S_{n}$. Let

$$
\sigma(0)=\inf \left\{n>0: S_{n}=0\right\}
$$

- be the first return time to the zero state. Using decompositions of the form

$$
\begin{aligned}
\mathscr{R}_{n}=1+I\left(S_{1} \neq 0\right)+I\left(S_{2} \neq 0,\right. & \left.S_{2} \neq S_{1}\right)+\ldots \\
& \ldots+I\left(S_{n} \neq 0, S_{n} \neq S_{1}, \ldots, S_{n} \neq S_{n-1}\right)
\end{aligned}
$$

and the following fact (which follows from the ergodic theorem):

$$
\frac{1}{n} \sum_{i=0}^{n} I\left(S_{i+j} \neq S_{i}, j \geqslant 1\right) \rightarrow \mathrm{P}\left(S_{j} \neq 0, j \geqslant 1\right)
$$

a.s. as $n \rightarrow \infty$ for all $k=1,2, \ldots, \infty$, prove the Kesten-Spitzer-Whitman theorem, which states that

$$
\frac{\mathscr{R}_{n}}{n} \rightarrow \mathrm{P}\left(S_{n} \neq 0, n \geqslant 1\right)=\mathrm{P}(\sigma(0)=\infty) \text { a.s. and in } L^{p}, p>0 .
$$

The probability $\mathrm{P}(\sigma(0)=\infty)$ is the probability of never returning to zero.
