---
tag: S1KJJ1RCZH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39111
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if in the polynomial $f(x)=a_{0} x^{n}+a_{1} x^{n-1}+\ldots+a_{n}$, where $a_{n} \neq 0$, there are $2 m$ consecutive terms missing (i.e., the coefficients of these terms are zero), then this polynomial has at least $2 m$ imaginary (non-real) roots, and if there are $2 m+1$ consecutive terms missing, then in the case where they are enclosed by terms of different signs, the polynomial has at least $2 m$ imaginary roots, and in the case where they are enclosed by terms of the same sign, the polynomial has at least $2 m+2$ imaginary roots (de Gua).

Consider the polynomials $f(x)$ and $f_{1}(x)=f^{\prime}(x)$. We will find the greatest common divisor of the polynomials $f$ and $f_{1}$ using the Euclidean algorithm:

$$
\begin{aligned}
& f=q_{1} f_{1}-f_{2}, \\
& f_{1}=q_{2} f_{2}-f_{3}, \\
& \ldots \cdots \cdots \cdots \cdots \cdots \cdots \\
& f_{n-2}=q_{n-1} f_{n-1}-f_{n}, \\
& f_{n-1}=q_{n} f_{n} .
\end{aligned}
$$

The sequence $f, f_{1}, \ldots, f_{n-1}, f_{n}$ is called the Sturm sequence of the polynomial $f$.
