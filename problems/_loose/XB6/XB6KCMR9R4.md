---
tag: XB6KCMR9R4
kind: problem
type: answer
answer: 2^{k}-2withk\geq2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all integers $n \geq 2$ for which

$$
i+j \equiv\left(\begin{array}{c}
n \\
i
\end{array}\right)+\left(\begin{array}{c}
n \\
j
\end{array}\right) \bmod 2
$$

for all $i$ and $j$ with $0 \leq i \leq j \leq n$.
