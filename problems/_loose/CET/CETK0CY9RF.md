---
tag: CETK0CY9RF
kind: problem
type: answer
answer: \frac{180}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189517
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be an arbitrary set of $n$ points $P_{1}, P_{2}, \ldots, P_{n}$ in the plane such that no three are collinear, and let $\alpha$ be the smallest of the angles $P_{i} P_{j} P_{k}$ where
$i \neq j \neq k \neq i$ and $i, j, k \in\{1,2, \ldots, n\}$. Determine $\max _{S} \alpha$ and find the sets $S$ for which this maximum value of the angle $\alpha$ is achieved.
