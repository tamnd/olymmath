---
tag: 1YNWYV8C9K
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180195
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine how many numbers of the form $\overline{a b c}$, with distinct digits, satisfy the relation:

$$
\overline{a b a}-\overline{a a a}+17(b-a)=c^{3}
$$
