---
tag: KKTRNH7245
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Algorithm of Euclid) Let $a$ and $b$ be two natural numbers such that $a \geqslant 1$. We define the sequences $\left(\mathfrak{u}_{n}\right)$ and $\left(v_{n}\right)$ such that $\mathfrak{u}_{0}=a, v_{0}=b$, and then, if $v_{k} \neq 0, \mathfrak{u}_{k+1}=v_{k}$ and $v_{k+1}$ is the remainder in the Euclidean division of $\mathfrak{u}_{k}$ by $v_{k}$. Show that the sequences $\left(\mathfrak{u}_{n}\right)$ and $\left(v_{n}\right)$ are necessarily finite, and that $\operatorname{PGCD}(\mathrm{a}, \mathrm{b})$ is equal to the last term $\mathfrak{u}_{\mathrm{k}}$ of the sequence.
