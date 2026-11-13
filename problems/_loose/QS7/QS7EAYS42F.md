---
tag: QS7EAYS42F
kind: problem
type: answer
answer: \frac{3n^{2}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91059
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number. We call a sequence consisting of $3 n$ letters Romanian if the letters $I, M$ and $O$ all occur exactly $n$ times. A swap is an exchange of two neighboring letters. Show that for every Romanian sequence $X$ there exists a Romanian sequence $Y$, so that at least $\frac{3 n^{2}}{2}$ swaps are necessary to obtain the sequence $Y$ from the sequence $X$.
