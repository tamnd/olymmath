---
tag: E05QQYNGA7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95371
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
6.3 .13 Let $a_{m}(m=1,2, \cdots)$ all be non-zero digits in the decimal system, and the number $z=\frac{a_{1}}{10}+$
$$
\frac{a_{2}}{10^{2!}}+\cdots+\frac{a_{m}}{10^{m!}}+\cdots
$$

Prove: $z$ is not the root of any polynomial with integer coefficients.
Thus, $\frac{1}{10^{(m+1)!-1}} \geqslant \frac{1}{M} \cdot \frac{1}{10^{n(m!)}}$, which requires $\frac{1}{10^{(m+1-n) m!-1}} \geqslant \frac{1}{M}$. As $m \rightarrow+\infty$, this cannot hold. Contradiction.
