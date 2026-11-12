---
tag: TPP283DQ3W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34099
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(X_{1}, \ldots, X_{n}\right)$ be a Gaussian vector consisting of independent $\mathscr{N}\left(0, \sigma^{2}\right)$-distributed random variables. Consider the spherical coordinates $\left(R, \Phi_{1}, \ldots, \Phi_{n-1}\right)$ of the vector $\left(X_{1}, \ldots, X_{n}\right)$, i.e., let $R \geqslant 0, \Phi_{n-1} \in[0,2 \pi), \Phi_{i} \in[0, \pi], 1 \leqslant i<n-1$, and

$$
\begin{aligned}
& X_{1}=R \cos \Phi_{1} \\
& X_{2}=R \sin \Phi_{1} \cos \Phi_{2} \\
& X_{3}=R \sin \Phi_{1} \sin \Phi_{2} \cos \Phi_{3}
\end{aligned}
$$

$$
\begin{aligned}
& X_{n-1}=R \sin \Phi_{1} \ldots \sin \Phi_{n-2} \cos \Phi_{n-1} \\
& X_{n}=R \sin \Phi_{1} \ldots \sin \Phi_{n-2} \sin \Phi_{n-1}
\end{aligned}
$$

Show that the joint density $f\left(r, \varphi_{1}, \ldots, \varphi_{n-1}\right)$ of the quantities $\left(R, \Phi_{1}, \ldots, \Phi_{n-1}\right)$ is given by the following formula:

$$
f\left(r, \varphi_{1}, \ldots, \varphi_{n-1}\right)=\frac{r^{n-1} \exp \left(-\frac{r^{2}}{2 \sigma^{2}}\right)}{(2 \pi)^{n / 2} \sigma^{n}} \sin ^{n-2} \varphi_{1} \sin ^{n-3} \varphi_{2} \ldots \sin \varphi_{n-2}
$$
