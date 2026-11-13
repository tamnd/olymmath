---
tag: NTBG91G5V5
kind: problem
type: answer
answer: "1159"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160628
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that
$$
x=\left\lfloor 1^{1 / 3}\right\rfloor+\left\lfloor 2^{1 / 3}\right\rfloor+\left\lfloor 3^{1 / 3}\right\rfloor+\cdots+\left\lfloor 7999^{1 / 3}\right\rfloor \text {, }
$$
find the value of $\left\lfloor\frac{x}{100}\right\rfloor$, where $\lfloor y\rfloor$ denotes the greatest integer less than or equal to $y$. (For example, $\lfloor 2.1\rfloor=2,\lfloor 30\rfloor=30,\lfloor-10.5\rfloor=-11$.)
