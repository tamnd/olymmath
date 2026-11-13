---
tag: 6DNZG8CZZY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185979
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all pairs $(f(x) ; g(x))$ of polynomials of degree 3

$$
\begin{aligned}
& f(x)=a_{3} x^{3}+a_{2} x^{2}+a_{1} x+a_{0} \\
& g(x)=b_{3} x^{3}+b_{2} x^{2}+b_{1} x+b_{0}
\end{aligned}
$$

whose coefficients $a_{0}, a_{1}, a_{2}, a_{3}, b_{0}, b_{1}, b_{2}, b_{3}$ are real numbers and for which the following conditions are satisfied:

(1) Each of the values that $f(x)$ and $g(x)$ take for $x=1,2,3$ and 4 is one of the numbers 0 and 1.

(2) If $f(1)=0$ or $f(2)=1$, then $g(3)=0$ and $g(4)=1$.

(3) If $f(1)=1$ or $f(4)=1$, then $g(1)=1$ and $g(3)=1$.

(4) If $f(2)=0$ or $f(4)=0$, then $g(2)=0$ and $g(4)=0$.

(5) If $f(3)=1$ or $f(4)=1$, then $g(1)=0$.
