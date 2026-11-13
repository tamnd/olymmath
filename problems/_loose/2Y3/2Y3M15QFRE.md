---
tag: 2Y3M15QFRE
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122319
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A group of $n$ friends wrote a math contest consisting of eight short-answer problems $S_{1}$, $S_{2}, S_{3}, S_{4}, S_{5}, S_{6}, S_{7}, S_{8}$, and four full-solution problems $F_{1}, F_{2}, F_{3}, F_{4}$. Each person in the group correctly solved exactly 11 of the 12 problems. We create an $8 \times 4$ table. Inside the square located in the $i^{\text {th }}$ row and $j^{\text {th }}$ column, we write down the number of people who correctly solved both problem $S_{i}$ and problem $F_{j}$. If the 32 entries in the table sum to 256 , what is the value of $n$ ?
