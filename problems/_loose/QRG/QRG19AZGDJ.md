---
tag: QRG19AZGDJ
kind: problem
type: answer
answer: "26"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56774
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A gold prospector has a pile of gold sand weighing 37 kg (and he has no more sand), a two-pan balance, and two weights of 1 and 2 kg. The prospector can perform actions of two types:

- balance the scales, i.e., if the scales are currently not in equilibrium, he can pour some sand from one pan to the other so that the scales come into balance;
- add sand to balance, i.e., if the scales are currently not in equilibrium, he can add sand to one of the pans so that the scales come into balance.

Of course, he can only perform each of these actions if he has enough sand.

How can he, in two actions with the scales, get a pile that weighs exactly 26 kg? Mixing two piles of sand, as well as simply placing something on the scales, does not count as an action.
