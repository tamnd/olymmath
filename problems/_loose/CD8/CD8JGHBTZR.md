---
tag: CD8JGHBTZR
kind: problem
type: answer
answer: 360=1^{2}+2^{2}+3^{2}+4^{2}+6^{2}+7^{2}+8^{2}+9^{2}+10^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109855
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From $26=1^{2}+5^{2}=1^{2}+3^{2}+4^{2}$, it can be concluded that 26 can be represented as the sum of squares of at most 3 distinct non-zero natural numbers. Please determine the maximum number of distinct non-zero natural numbers whose squares can sum up to 360?
