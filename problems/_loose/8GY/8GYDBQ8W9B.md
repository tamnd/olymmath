---
tag: 8GYDBQ8W9B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241358
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An ordered quadruple of numbers is called *ten-esque* if it is composed of 4 nonnegative integers whose sum is equal to $10$. Ana chooses a ten-esque quadruple $(a_1, a_2, a_3, a_4)$ and Banana tries to guess it. At each stage Banana offers a ten-esque quadtruple $(x_1,x_2,x_3,x_4)$ and Ana tells her the value of
$$|a_1-x_1|+|a_2-x_2|+|a_3-x_3|+|a_4-x_4|$$
How many guesses are needed for Banana to figure out the quadruple Ana chose?
