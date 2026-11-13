---
tag: GVR21E08NE
kind: problem
type: answer
answer: "44"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265662
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 2021 light bulbs in a row, labeled 1 through 2021, each with an on/off switch. They all start in the off position when 1011 people walk by. The first person flips the switch on every bulb; the second person flips the switch on every 3rd bulb (bulbs 3, 6, etc.); the third person flips the switch on every 5th bulb; and so on. In general, the $k$th person flips the switch on every $(2k - 1)$th light bulb, starting with bulb $2k - 1$. After all 1011 people have gone by, how many light bulbs are on?
