---
tag: 6VXJE3SW0Y
kind: problem
type: answer
answer: \(\mathrm{AC},3\mathrm{AB},2\mathrm{BC})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A player starts with A blue cards, B red cards and C white cards. He scores points as he plays each card. If he plays a blue card, his score is the number of white cards remaining in his hand. If he plays a red card it is three times the number of blue cards remaining in his hand. If he plays a white card, it is twice the number of red cards remaining in his hand. What is the lowest possible score as a function of $\mathrm{A}, \mathrm{B}$ and $\mathrm{C}$ and how many different ways can it be achieved?
