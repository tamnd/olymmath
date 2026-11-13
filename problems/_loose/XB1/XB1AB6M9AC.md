---
tag: XB1AB6M9AC
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You have been kidnapped by a witch and are stuck in the *Terrifying Tower*, which has an infinite number of floors, starting with floor 1, each initially having 0 boxes. The witch allows you to do the following two things:

- For a floor $i$, put 2 boxes on floor $i+5$, 6 on floor $i+4$, 13 on floor $i+3$, 12 on floor $i+2$, 8 on floor $i+1$, and 1 on floor $i$, or remove the corresponding number of boxes from each floor if possible.

- For a floor $i$, put 1 box on floor $i+4$, put 3 boxes on floor $i+3$, 6 on floor $i+2$, 5 on floor $i+1$, and 3 on floor $i$, or remove the corresponding number of boxes from each floor if possible.

At the end, suppose the witch wishes to have exactly $n$ boxes in the tower. Specifically, she wants them to be on the first 10 floors. Let $T(n)$ be the number of distinct distributions of these $n$ boxes that you can make. Find $ \sum_{n=1}^{15} T(n)$.

*Proposed by Monkey_king1*
