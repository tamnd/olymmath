---
tag: SCP6DBRA54
kind: problem
type: answer
answer: \sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115168
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x, y$ be real numbers, satisfying
$$
\begin{array}{l}
x^{2}+y^{2} \leqslant 1, \\
f(x, y) \\
=x^{n}+\mathrm{C}_{n}^{1} x^{n-1} y-\mathrm{C}_{n}^{2} x^{n-2} y^{2}-\mathrm{C}_{n}^{3} x^{n-3} y^{3}+\cdots+ \\
(-1)^{\left[\frac{k}{2}\right]} \mathrm{C}_{n}^{k} x^{n-k} y^{k}+\cdots+(-1)^{\left[\frac{n}{2}\right]} y^{n},
\end{array}
$$

where $[x]$ denotes the greatest integer not exceeding the real number $x$.
Prove: $|f(x, y)| \leqslant \sqrt{2}$.
