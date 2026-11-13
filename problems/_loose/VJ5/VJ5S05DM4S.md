---
tag: VJ5S05DM4S
kind: problem
type: answer
answer: x_n = n + \frac{1}{5} \log_2 \left( \frac{5 \times 4^n}{4^n - 11} \right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve for real $x$ : $2^{2x} \cdot 2^{3\{x\}} = 11 \cdot 2^{5\{x\}} + 5 \cdot 2^{2[x]}$

(For a real number $x, [x]$ denotes the greatest integer less than or equal to x. For instance, $[2.5] = 2$, $[-3.1] = -4$, $[\pi ] = 3$. For a real number $x, \{x\}$ is defined as $x - [x]$.)
