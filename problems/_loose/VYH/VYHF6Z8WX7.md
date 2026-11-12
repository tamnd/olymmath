---
tag: VYHF6Z8WX7
kind: problem
type: answer
answer: \begin{pmatrix}X&1&2&3&4&5\\\hlineP&0.06&0.056&0.053&0.050&0.781\\\end{pmatrix}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32989
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The probability of producing a non-standard item with a certain technological process is 0.06. The inspector takes an item from the batch and immediately checks its quality. If it turns out to be non-standard, further tests are stopped, and the batch is held. If the item is standard, the inspector takes the next one, and so on, but no more than five items are checked. Find the distribution law of the discrete random variable $X$ - the number of items checked.
