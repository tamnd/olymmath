---
tag: MEZRG8D0AV
kind: problem
type: answer
answer: (17,51)or(51,17)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77729
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(a, b)$ of natural numbers such that:

$$
\mathrm{ab}+85=12 \cdot \operatorname{lcm}(\mathrm{a}, \mathrm{b})+20 \cdot \operatorname{gcd}(\mathrm{a}, \mathrm{b})
$$
