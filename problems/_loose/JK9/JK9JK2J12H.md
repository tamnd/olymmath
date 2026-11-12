---
tag: JK9JK2J12H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Let the function $f(x)$ be differentiable $n$ times and for all real $x, y, x \neq y$, the equality

$$
\frac{f(x)-\sum_{k=0}^{n-1} \frac{(x-y)^{k}}{k!} f^{(k)}(y)}{(x-y)^{n}}=\frac{f^{(n)}(x)+f^{(n)}(y)}{(n+1)!}
$$

holds. Prove that then $f$ is a polynomial of degree not higher than $n$.

b) Prove that if for all real $x, y, x \neq y$, the equality

$$
\frac{f(x)-g(y)}{x-y}=\frac{\varphi(x)+\varphi(y)}{2}
$$

holds, then $f$ is a polynomial of degree not higher than $2$, $g=f$, and $\varphi=f^{\prime}$.
