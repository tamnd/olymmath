---
tag: M4PFVYK1C2
kind: problem
type: answer
answer: card(A_p) = 1 and card(A_1 ∪ A_2 ∪ ⋯ ∪ A_p) = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a positive integer and $A_p = \{x \in \mathbb{R} \mid p\{x\} = (p+1)[x]\}$. Find the cardinals of the sets $A_p$ and $A_1 \cup A_2 \cup \dots \cup A_p$.
