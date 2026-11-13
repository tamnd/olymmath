---
tag: 4QQJNKJW3V
kind: problem
type: answer
answer: (8, 513), (513, 8), (215, 2838), (2838, 215), (258, 1505), (1505, 258), (235, 2961), (2961, 235)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221450
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of natural numbers $(\alpha,\beta)$ for which, if $\delta$ is the greatest common divisor of $\alpha,\beta$, and $\varDelta$ is the least common multiple of $\alpha,\beta$, then
$$ \delta + \Delta = 4(\alpha + \beta) + 2021$$
