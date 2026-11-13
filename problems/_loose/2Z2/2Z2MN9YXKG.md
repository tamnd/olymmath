---
tag: 2Z2MN9YXKG
kind: problem
type: answer
answer: \sqrt{\frac{25-5\sqrt{5}}{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129095
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
\begin{array}{l}
M=\left\{(x, y) \left\lvert y \geqslant \frac{1}{4} x^{2}\right.\right\}, N=\left\{(x, y) \left\lvert y \leqslant-\frac{1}{4} x^{2}+x+7\right.\right\}, \\
D_{r}\left(x_{0}, y_{0}\right)=\left\{(x, y) \mid\left(x-x_{0}\right)^{2}+\left(y-y_{0}\right)^{2} \leqslant r^{2}\right\} .
\end{array}
$$

Find the largest $r$ such that $D_{r}\left(x_{0}, y_{0}\right) \subset M \cap N$.
