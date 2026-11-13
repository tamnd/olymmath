---
tag: TZ12J6NENS
kind: problem
type: answer
answer: n\in\mathbb{N}\backslash{0,1,2,4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179437
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all natural numbers $n, n \geq 3$, for which there exists a set $M$, consisting of $n$ different, non-zero vectors with equal magnitudes such that $\sum_{\vec{u} \in M} \vec{u}=\overrightarrow{0}$, knowing that for any $\vec{v}, \vec{w} \in M$ we have $\vec{v}+\vec{w} \neq \overrightarrow{0}$.
