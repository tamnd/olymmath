---
tag: 9HYVRRXQ9R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237729
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The *fragments * of a positive integer are the numbers seen when reading one or more of its digits in order. The *fragment sum* equals the sum of all the fragments, including the number itself. For example, the fragment sum of $2022$ is $2022+202+022+20+02+22+2+0+2+2 = 2296$.
There is another four-digit number with the same fragment sum. What is it?
As the example shows, if a fragment occurs multiple times, then all its occurrences are added, and the fragments beginning with $0$ also count (for instance, $022$ is worth $22$).
