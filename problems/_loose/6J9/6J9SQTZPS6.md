---
tag: 6J9SQTZPS6
kind: problem
type: answer
answer: m_a = a
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal{F}$ be the family of bijective increasing functions $f\colon [0,1] \to [0,1]$, and let $a \in (0,1)$. Determine the best constants $m_a$ and $M_a$, such that for all $f \in \mathcal{F}$ we have
$$m_a \leq f(a) + f^{-1}(a) \leq M_a.$$

*(Dan Schwarz)*
