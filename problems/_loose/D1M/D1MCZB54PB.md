---
tag: D1MCZB54PB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248303
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$\textbf{(a)}$ Let $a,b \in \mathbb{R}$ and $f,g :\mathbb{R}\rightarrow \mathbb{R}$ be differentiable functions. Consider the function $$h(x)=\begin{vmatrix}
a &b &x\\
f(a) &f(b) &f(x)\\
g(a) &g(b) &g(x)\\
\end{vmatrix}$$
Prove that $h$ is differentiable and find $h'$.
\\ \\
$\textbf{(b)}$ Let $n\in \mathbb{N}$, $n\geq 3$, take $n-1$ pairwise distinct real numbers $a_1<a_2<\dots <a_{n-1}$ with sum $\sum_{i=1}^{n-1}a_i = 0$, and consider $n-1$ functions $f_1,f_2,...f_{n-1}:\mathbb{R}\rightarrow \mathbb{R}$, each of them $n-2$ times differentiable over $\mathbb{R}$. Prove that there exists $a\in (a_1,a_{n-1})$ and $\theta, \theta_1,...,\theta_{n-1}\in \mathbb{R}$, not all zero, such that $$\sum_{k=1}^{n-1} \theta_k a_k=\theta a$$ and, at the same time, $$\sum_{k=1}^{n-1}\theta_kf_i(a_k)=\theta f_i^{(n-2)}(a)$$ for all $i\in\{1,2...,n-1\} $.
\\ \\
*(Sergiu Novac)*
