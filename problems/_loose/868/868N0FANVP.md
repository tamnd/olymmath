---
tag: 868N0FANVP
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184527
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
As can be seen from examples, there are pairs $(x, y)$ where $x$ and $y$ are each a two-digit natural number with the following property:

If the digits of this number are swapped and 9 is added to the resulting number, the other number of the pair is obtained. (An example of such a pair is (25; 61), since $52+9=61$ and $16+9=25$.)
