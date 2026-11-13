---
tag: 1QGPREX13F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135717
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a real number $\alpha>1$. The sequence $\left\{a_{n}\right\}$ satisfies:
$$
a_{1} \in(0,1), a_{n+1}=a_{n}+\left(\frac{a_{n}}{n}\right)^{\alpha} \text {. }
$$

Prove: There exists a constant $M$, such that for any positive integer $n$, we have $a_{n} \leqslant M$.
