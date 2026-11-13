---
tag: BAN8B2D92E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93542
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathrm{n} \geq 2$ be an integer. Fill the integers $1, 2, \ldots, \mathrm{n}^{2}$ into an $\mathrm{n} \times \mathrm{n}$ grid in any manner, with one number per cell. Examine the difference between the maximum and minimum numbers in each row, and also the difference between the maximum and minimum numbers in each column. Let the maximum of these $2 \mathrm{n}$ differences be denoted as $\mathrm{d}_{\mathrm{n}}$, which is called the "range" of the number table. Try to find the minimum possible value of the range.
