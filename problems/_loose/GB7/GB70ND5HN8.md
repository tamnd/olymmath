---
tag: GB70ND5HN8
kind: problem
type: answer
answer: '{1,2,\ldots,2015}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all integers $a$ for which the solution $(x, y)$ of the system of equations

$$
\begin{aligned}
& x+(a+1) y=2 \\
& a(2 x-y)-a(a y+1)=3
\end{aligned}
$$

satisfies the condition $|x+y| \leqslant \frac{2018}{a+1}$.
