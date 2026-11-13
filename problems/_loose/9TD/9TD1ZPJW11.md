---
tag: 9TD1ZPJW11
kind: problem
type: answer
answer: "90"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81307
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be the function from $\mathbb{N}^{*}$ to $\mathbb{N}^{*}$ defined by (for all $n$ in $\mathbb{N}^{*}$):

$$
\begin{aligned}
f(1) & =1 \\
f(3) & =3 \\
f(2 n) & =f(n) \\
f(4 n+1) & =2 f(2 n+1)-f(n) \\
f(4 n+3) & =3 f(2 n+1)-2 f(n)
\end{aligned}
$$
