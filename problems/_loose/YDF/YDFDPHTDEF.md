---
tag: YDFDPHTDEF
kind: problem
type: answer
answer: P(A)=\frac{C_{k}^{r}\cdotC_{N-k}^{-r}}{C_{N}^{}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a batch of $N$ items, there are $k$ standard items. For inspection, $l$ items are randomly selected. Find the probability that among the selected items, exactly $r$ are standard.
