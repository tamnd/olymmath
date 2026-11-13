---
tag: VMAD6WV093
kind: problem
type: answer
answer: "27"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider twenty buildings arranged in a circle. Each building has an integer number of floors between 1 and 20. We assume that any two buildings always have a different number of floors. A building is said to be interesting if it has more floors than one of its neighbors and fewer floors than the other of its neighbors. The buildings are arranged in such a way that there are exactly six interesting buildings in total.

1) Show that the sum of the number of floors of the interesting buildings is always greater than or equal to 27.
2) Provide a configuration of twenty buildings for which there are exactly six interesting buildings and the sum of the number of floors is exactly 27.
