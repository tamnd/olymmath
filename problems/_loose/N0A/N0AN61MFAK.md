---
tag: N0AN61MFAK
kind: problem
type: answer
answer: "71"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233461
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two math students play a game with $k$ sticks. Alternating turns, each one chooses a number from the set $\{1,3,4\}$ and removes exactly that number of sticks from the pile (so if the pile only has $2$ sticks remaining the next player must take $1$). The winner is the player who takes the last stick. For $1\leq k\leq100$, determine the number of cases in which the first player can guarantee that he will win.
