---
tag: AZNCVY1AR4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25962
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a row, $n$ light bulbs are placed and some of them are turned on. Each minute after that, all the light bulbs simultaneously change their state according to the following rule. The bulbs that were on in the previous minute turn off. Those that were off in the previous minute and were adjacent to exactly one lit bulb, turn on. For which $n$ can some of the light bulbs be initially turned on so that at any moment there is at least one lit bulb?
