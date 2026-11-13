---
tag: 4BS0RVKEFV
kind: problem
type: answer
answer: (2,5)(5,2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89100
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $a$ and $b$ are natural numbers, then $\overline{\overline{a . b}}$ is the decimal number obtained by writing a decimal point after the number $a$ and then the number $b$. For example, if $a=20$ and $b=17$, then $\overline{\overline{a . b}}=20.17$ and $\overline{\overline{b . a}}=17.2$.

Determine all pairs $(a, b)$ of natural numbers for which $\overline{\overline{a \cdot b}} \cdot \overline{\overline{b . a}}=13$.
