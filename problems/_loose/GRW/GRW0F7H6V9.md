---
tag: GRW0F7H6V9
kind: problem
type: answer
answer: \frac{n^{\alpha}}{\alpha+1}<\sum_{k=1}^{n}k^{\alpha}<\frac{n^{\alpha+1}}{\alpha+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118900
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: When $\alpha>0$, $\frac{n^{\alpha}}{\alpha+1}<1^{\alpha}+2^{\alpha}+\cdots+n^{\alpha}<\frac{n^{\alpha+1}}{\alpha+1}$.
