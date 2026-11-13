---
tag: JMDBYY0C4K
kind: problem
type: answer
answer: f(x)=00b_{1}b_{1}b_{2}b_{2}b_{3}b_{3}\cdots
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(2003 Thailand Mathematical Olympiad) Define in the set of rational numbers: $f(0)=0, f(1)=1$,
$$
f(x)=\left\{\begin{array}{l}
\frac{f(2 x)}{4}, 0<x<\frac{1}{2} ; \\
\frac{3}{4}+\frac{f(2 x-1)}{4}, \frac{1}{2} \leqslant x<1 .
\end{array}\right.
$$

If $x$ is represented in binary, such as $x=\left(0 . b_{1} b_{2} b_{3} \cdots\right)_{2}$, find the binary representation of $f(x)$.
