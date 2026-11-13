---
tag: CRXH0M0J0Y
kind: problem
type: answer
answer: \frac{\sqrt[3]{2}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109672
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\alpha, \beta, \gamma$ be any complex numbers, then
(1) If $|\alpha|,|\beta|,|\gamma|$ are not all $\leqslant 1$, prove that when $\lambda \leqslant \frac{2}{3}$, we have
$$
\begin{aligned}
& 1+|\alpha+\beta+\gamma|+|\alpha \beta+\beta \gamma+\gamma \alpha|+|\alpha \beta \gamma| \\
\geqslant & \lambda(|\alpha|+|\beta|+|\gamma|) .
\end{aligned}
$$
(2) If $\alpha, \beta, \gamma$ are any complex numbers, what is the maximum value of $\lambda$ for which the above inequality holds?
