---
tag: N5W0MGBB0X
kind: problem
type: answer
answer: (x^2-y^3)(y^3-z^6)(z^6-x^2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x, y, z)$ be a polynomial in $x, y, z$, and a 4th-degree polynomial in $x$, satisfying
$$
\left\{\begin{array}{l}
f\left(x, z^{2}, y\right)+f\left(x, y^{2}, z\right)=0, \\
f\left(z^{3}, y, x\right)+f\left(x^{3}, y, z\right)=0 .
\end{array}\right.
$$

Find such a polynomial $f(x, y, z)$.
(1995 Japan Mathematical Olympiad Preliminary Problem)
