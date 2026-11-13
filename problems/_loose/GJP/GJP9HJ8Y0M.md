---
tag: GJP9HJ8Y0M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
6・71 The polynomial sequence $p_{0}(x), p_{1}(x), p_{2}(x), \cdots \cdots$ satisfies the equation $p_{0}(x)=1, p_{1}(x)=x$, $(n+t-2) p_{n+1}(x)=(2 n+t-2) x p_{n}(x)-n p_{n-1}(x)$, where $t$ is a fixed real number greater than 1, and $n=1,2,3 \cdots \cdots$
(1) Prove that for each polynomial
$$
\begin{array}{l}
f(x)=a_{0} x^{n}+a_{1} x^{n-1}+\cdots+a_{n-1} x+a_{n}, \\
\left(a_{0} \neq 0, a_{i} \in R, 0 \leqslant i \leqslant n\right)
\end{array}
$$

there exists a unique set of real numbers $\left\{c_{0}, c_{1}, \cdots, c_{n}\right\}$, such that
$$
f(x)=c_{0} p_{0}(x)+c_{1} p_{1}(x)+\cdots+c_{n} p_{n}(x) .
$$
(2) Find $c_{0}$, such that
$$
f(x)=\left(x^{2}+\alpha x+\beta\right)^{2}\left(x-\frac{1}{2}\right) .
$$

where $\alpha$ and $\beta$ are real numbers.
(3) If $t \geqslant 10$, prove that the $c_{0}$ found in (2) satisfies $c_{0} \leqslant 0$.
