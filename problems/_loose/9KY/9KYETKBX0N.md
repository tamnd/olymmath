---
tag: 9KYETKBX0N
kind: problem
type: answer
answer: "19"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85887
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Elisa makes so-called fake dice. On each side of a fake die, one of the numbers 1 through 6 is written, but not every number has to appear, and some numbers may appear more often. However, from all sides, it must look like a real die. This means: at each corner, three different numbers come together, and no two of them add up to 7 (on a real die, such pairs of numbers are always opposite each other). The numbers 1, 2, and 4 can come together at a corner, for example, but 1, 2, and 5 cannot because $2+5=7$. A regular die, of course, also counts as a fake die.

Elisa is interested in the eye sum of the fake die: the sum of the six numbers on the fake die.

How many different possibilities are there for the eye sum of a fake die?
