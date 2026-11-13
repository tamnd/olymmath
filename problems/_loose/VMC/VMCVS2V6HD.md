---
tag: VMCVS2V6HD
kind: problem
type: answer
answer: (m \text{ is even}) \text{ or } (n \text{ is odd})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265869
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m,n$ be positive integers. Alice and Bob play a game on an initially blank $n\times n$ square grid $G$, alternating turns with Alice first. On a turn, the player can color a completely blank $m \times m$ subgrid of $G,$ or color in one blank cell of $G$. A player loses when they cannot do this. Find all $(m,n)$ so that with an optimal strategy, Alice wins.
