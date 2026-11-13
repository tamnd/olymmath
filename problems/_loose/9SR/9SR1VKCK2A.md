---
tag: 9SR1VKCK2A
kind: problem
type: answer
answer: "344"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213721
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Start with a three-digit positive integer $A$. Obtain $B$ by interchanging the two leftmost digits of $A$. Obtain $C$ by doubling $B$. Obtain $D$ by subtracting $500$ from $C$. Given that $A + B + C + D = 2014$, find $A$.
