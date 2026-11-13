---
tag: 73DYKDTHRC
kind: problem
type: answer
answer: p+(n-1)q=\frac{n}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a bag are $n$ fair, six-sided dice whose faces are colored white and red in such a way that the total numbers of white and red sides are equal. Let $p$ be the probability that the same color comes up twice when taking one die randomly out of the bag and throwing it twice. Let $q$ be the probability that the same color comes up twice when taking two dice randomly out of the bag and throwing them at the same time. Prove that

$$
p+(n-1) q=\frac{n}{2}
$$
