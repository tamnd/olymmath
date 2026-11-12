---
tag: NXJ1TYCKP7
kind: problem
type: answer
answer: \frac{3\pi}{4}+6\pik,k\in\mathbb{Z}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $t=\pi / 4-x / 3$. Then the original inequality is equivalent to:

$$
\begin{aligned}
3 \cos 2 t+2 \cos t-5 \geqslant 0 \Longleftrightarrow 3\left(2 \cos ^{2} t-1\right)+2 \cos t-5 \geqslant 0 \Longleftrightarrow \\
\Longleftrightarrow 6(\cos t-1)\left(\cos t+\frac{4}{3}\right) \geqslant 0
\end{aligned}
$$

We obtain $\cos t \in(-\infty ;-4 / 3] \cup[1 ;+\infty)$. Considering the range of cosine values, $\cos t=1$ or $\pi / 4-x / 3=2 \pi k, k \in \mathbb{Z}$.
