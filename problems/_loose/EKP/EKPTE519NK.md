---
tag: EKPTE519NK
kind: problem
type: answer
answer: r \equiv p - d \pmod{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ p$ be a prime and let $ d \in \left\{0,\ 1,\ \ldots,\ p\right\}$. Prove that
$$ \sum_{k = 0}^{p - 1}{\binom{2k}{k + d}}\equiv r \pmod{p},
$$where $ r \equiv p-d \pmod 3$, $ r\in\{-1,0,1\}$.
