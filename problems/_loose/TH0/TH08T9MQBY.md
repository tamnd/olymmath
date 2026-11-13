---
tag: TH08T9MQBY
kind: problem
type: answer
answer: "34"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78262
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have 100 light bulbs, numbered from 1 to 100, each of which can be either on or off. These light bulbs are connected to three switches A, B, and C.

Pressing A changes the state of all the light bulbs: those that were on turn off, and those that were off turn on.

Pressing B changes the state only of the light bulbs with odd numbers.

Pressing C changes the state only of the light bulbs with numbers of the form 3n+1.

At the beginning of the evening, all the light bulbs were on. However, during the party and carried away by his enthusiasm, Igor pressed the switches a total of 1000 times, randomly. It turns out that the light bulbs numbered 95 and 96 are off.

How many light bulbs are still on?
