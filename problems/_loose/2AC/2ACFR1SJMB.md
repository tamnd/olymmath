---
tag: 2ACFR1SJMB
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a set of weights, each weighing an integer number of grams, and the total weight of all weights is 200 grams. Such a set is called correct if any body with a weight expressed as an integer number of grams from 1 to 200 can be balanced by some number of weights from the set, and in a unique way (the body is placed on one pan of the scales, the weights - on the other; two balancing methods that differ only by the replacement of some weights with others of the same weight are considered the same).

a) Provide an example of a correct set where not all weights are one gram each.

b) How many different correct sets exist?

(Two sets are different if some weight participates in these sets a different number of times.)
