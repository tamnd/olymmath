---
tag: 59AYT4WV0E
kind: problem
type: answer
answer: 2+(\frac{1}{2})^{n}<x_{n+1}<2+(\frac{3}{4})^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the sequence $\left\{x_{n}\right\}$, $x_{1}=3$, and satisfies the inequality relationship
$$
\left\{\begin{array}{l}
4 x_{n+1}-3 x_{n}<2 \\
2 x_{n+1}-x_{n}<2
\end{array}\right.
$$

Prove: $2+\left(\frac{1}{2}\right)^{n}<x_{n+1}<2+\left(\frac{3}{4}\right)^{n}$.
