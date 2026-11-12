---
tag: DB1Z5V1SFW
kind: problem
type: answer
answer: \frac{2}{13\cdot15\cdot17}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5691
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}=\frac{1}{17}, a_{n+1}=\frac{1}{15}+d n, a_{m+1}=\frac{1}{15}+d m, d$ - the common difference of the progression. Then

$$
\left\{\begin{array}{l}
n d=\frac{1}{15}-\frac{1}{17}=\frac{2}{15 \cdot 17}, \\
m d=\frac{1}{13}-\frac{1}{15}=\frac{2}{13 \cdot 15}
\end{array} \Rightarrow \frac{n}{m}=\frac{13}{17} \Leftrightarrow 17 n=13 m\right.
$$

The greatest value of the difference is the smallest values of $n$ and $m$. Thus $n=13 \Leftrightarrow d=$ $\frac{2}{13 \cdot 15 \cdot 17}$.
