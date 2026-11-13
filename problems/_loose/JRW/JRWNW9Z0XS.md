---
tag: JRWNW9Z0XS
kind: problem
type: answer
answer: a_{2020}\leqslant5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84797
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequences $\left(a_{n}\right)_{n \geqslant 0}$ and $\left(b_{n}\right)_{n \geqslant 0}$ defined by $a_{0}=1, b_{0}=2$ and for all $n \geqslant 0$ :

$$
\begin{aligned}
& a_{n+1}=\frac{a_{n} b_{n}+a_{n}+1}{b_{n}} \\
& b_{n+1}=\frac{a_{n} b_{n}+b_{n}+1}{a_{n}}
\end{aligned}
$$

Show that $a_{2020}<5$.
