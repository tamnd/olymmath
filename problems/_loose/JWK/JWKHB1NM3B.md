---
tag: JWKHB1NM3B
kind: problem
type: answer
answer: 2\frac{1}{5}\leqx<2\frac{1}{3},2\frac{2}{5}\leqx<2\frac{3}{5},2\frac{2}{3}\leqx<2\frac{4}{5}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=155274
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We write $\lfloor x\rfloor$ to represent the largest integer less than or equal to $x$. So, for example, $\lfloor 1.7\rfloor=1,\lfloor 2\rfloor=2,\lfloor\pi\rfloor=3$ and $\lfloor-0.4\rfloor=-1$.
Find all real values of $x$ such that $\lfloor 3 x+4\rfloor=\lfloor 5 x-1\rfloor$.
