---
tag: 8Z25JVFA1Y
kind: problem
type: answer
answer: "314"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=193980
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\lfloor x\rfloor$ denote the greatest integer which is less than or equal to $x$. For example, $\lfloor\pi\rfloor=3 . S$ is the integer equal to the sum of the 100 terms shown:

$$
S=\lfloor\pi\rfloor+\left\lfloor\pi+\frac{1}{100}\right\rfloor+\left\lfloor\pi+\frac{2}{100}\right\rfloor+\left\lfloor\pi+\frac{3}{100}\right\rfloor+\cdots+\left\lfloor\pi+\frac{99}{100}\right\rfloor
$$

What is the value of $S$ ?
