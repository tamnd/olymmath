---
tag: FNQ79AEMRT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205141
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Function $f:\mathbb{Z}_{\geq 0}\rightarrow\mathbb{Z}$ satisfies
$$f(m+n)^2=f(m|f(n)|)+f(n^2)$$
for any non-negative integers $m$ and $n$. Determine the number of possible sets of integers $\{f(0), f(1), \dots, f(2024)\}$.
