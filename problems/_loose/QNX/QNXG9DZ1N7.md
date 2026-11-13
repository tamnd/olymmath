---
tag: QNXG9DZ1N7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131727
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If there exists a function $\varphi(x)$ and its inverse $\varphi^{-1}(x)$ such that $f(x)=\varphi^{-1}(g(\varphi(x)))$,
we say that $f(x)$ is similar to $g(x)$ through $\varphi(x)$, or simply that $f(x)$ and $g(x)$ are similar, where $\varphi(x)$ is called the bridge function.
If $f(x)$ and $g(x)$ are similar, i.e., $f(x)=\varphi^{-1}(g(\varphi(x)))$, then
$$
\begin{aligned}
f^{(2)}(x) & =f(f(x))=\varphi^{-1}(g(\varphi(f(x)))) \\
& =\varphi^{-1}\left(g\left(\varphi\left(\varphi^{-1}(g(\varphi(x)))\right)\right)\right)=\varphi^{-1}\left(g^{(2)}(\varphi(x))\right) .
\end{aligned}
$$

Using mathematical induction, we can prove: $f^{(n)}(x)=\varphi^{-1}\left(g^{(n)}(\varphi(x))\right)$. This way, the $n$-th iteration problem of $f$ is transformed into the $n$-th iteration problem of $g$.
Use this method to find the $n$-th iteration of the following functions.
(1) $f(x)=\frac{x^{2}}{2 x-1}$;
(2) $f(x)=\frac{x}{\sqrt[k]{1+a x^{k}}}$, where $k$ is a given positive integer;
(3) $f(x)=2 x^{2}-1, -1 \leqslant x \leqslant 1$;
(4) $f(x)=4 x(1-x), 0 \leqslant x \leqslant 1$.
