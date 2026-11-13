---
tag: EN4AR5BCDB
kind: problem
type: answer
answer: "13"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77820
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all integers $n \geqslant 1$ such that there exists a permutation $\left(a_{1}, a_{2}, \ldots, a_{n}\right)$ of $(1,2, \ldots, \mathbf{n})$ satisfying the following condition:

$$
\mathrm{k} \mid \mathrm{a}_{1}+\mathrm{a}_{2}+\ldots+\mathrm{a}_{\mathrm{k}}
$$

for all $k \in\{1,2, \ldots, \mathrm{n}\}$.
