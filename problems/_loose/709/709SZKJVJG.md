---
tag: 709SZKJVJG
kind: problem
type: answer
answer: \frac{(\sqrt{6}-\sqrt{2})}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32423
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The distribution function of a two-dimensional random variable is given by

$$
F(x, y)=\left\{\begin{array}{c}
\sin x \cdot \sin y \text { for } 0 \leqslant x \leqslant \pi / 2,0 \leqslant y \leqslant \pi / 2 \\
0 \text { for } x<0 \text { or } y<0
\end{array}\right.
$$

Find the probability that a random point $(X, Y)$ falls within the rectangle bounded by the lines $x=0, x=\pi / 4$, $\boldsymbol{y}=\pi / 6, y=\pi / 3$.
