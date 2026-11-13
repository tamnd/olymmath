---
tag: SK2YGB0ACA
kind: problem
type: answer
answer: \left(\frac{23}{27}, 1\right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218556
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find every real values that $a$ can assume such that
$$\begin{cases}
x^3 + y^2 + z^2 = a\\
x^2 + y^3 + z^2 = a\\
x^2 + y^2 + z^3 = a
\end{cases}$$
has a solution with $x, y, z$ distinct real numbers.
