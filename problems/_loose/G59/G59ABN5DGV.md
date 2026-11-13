---
tag: G59ABN5DGV
kind: problem
type: answer
answer: a_{n}<1+\sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the numbers

$$
a_{n}=\sqrt{1+\sqrt{2+\sqrt{2^{2}+\sqrt{2^{3}+\ldots+\sqrt{2^{n}}}}}}
$$

$(n=1,2, \ldots)$ are bounded above.
