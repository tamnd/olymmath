---
tag: 1RTWSFSXE7
kind: problem
type: answer
answer: "500000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On 1000 cards, write down the natural numbers $1, 2, \cdots, 1000$ (one number per card), and then use these cards to cover 1000 squares in a $1 \times 1994$ rectangle, where each square is the same size as the cards. If the square to the right of the square covered by the card with the natural number $n$ is empty, then the card with $n+1$ can be moved to cover this empty square, which is called moving once. Prove that it is impossible to make more than 500,000 such moves.
