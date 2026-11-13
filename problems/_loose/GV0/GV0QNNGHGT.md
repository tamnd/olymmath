---
tag: GV0QNNGHGT
kind: problem
type: answer
answer: \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269077
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\alpha > 0$ be a real number. Compute the limit of the sequence $\{x_n\}_{n\geq 1}$ defined by $$x_n=\begin{cases} \sum \limits_{k=1}^n \sinh \left(\frac{k}{n^2}\right),& \text{when}\ n>\frac{1}{\alpha}\\ 0,& \text{when}\ n\leq \frac{1}{\alpha}\end{cases}$$
