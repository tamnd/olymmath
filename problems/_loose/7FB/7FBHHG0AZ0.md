---
tag: 7FBHHG0AZ0
kind: problem
type: answer
answer: (\frac{17}{4};\frac{9}{2}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5673
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
By making the substitution $t=\sqrt{x-2}$, we reduce the inequality to $|2 t-3|+|2 t-4| \leqslant \log _{1 / 4}\left(x-\frac{17}{4}\right)$. Since $x>\frac{17}{4}$, then $t>\frac{3}{2}$.

For $t \in\left(\frac{3}{2} ; 2\right]$, we get: $1 \leqslant \log _{1 / 4}\left(x-\frac{17}{4}\right)$, from which $x \in\left(\frac{17}{4} ; \frac{9}{2}\right]$.

For $t>2$, we get: $4 t-7 \leqslant \log _{1 / 4}\left(x-\frac{17}{4}\right)$. Since $t>2$, the left side of the equation is greater than 1. On the other hand, for $t>2$, we get that $x>6$, and then $\left(x-\frac{17}{4}\right)>1$ and $\log _{1 / 4}\left(x-\frac{17}{4}\right)<0$.
