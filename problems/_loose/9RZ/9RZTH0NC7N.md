---
tag: 9RZTH0NC7N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a real number $x$, we denote $\lfloor x\rfloor$ as the greatest integer less than or equal to $x$ (for example, $\lfloor 2.7\rfloor=2, \lfloor\pi\rfloor=3$ and $\lfloor-1.5\rfloor=-2$).

Let $a, b$ be two real numbers such that

$$
a+\lfloor a\rfloor=b+\lfloor b\rfloor
$$

Show that $a=b$.
