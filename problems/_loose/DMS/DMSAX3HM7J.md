---
tag: DMSAX3HM7J
kind: problem
type: answer
answer: "40200"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5086
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $a_{n}$ is defined as follows:
$a_{1}=2, a_{n+1}=a_{n}+\frac{2 a_{n}}{n}$, for $n \geq 1$. Find $a_{200}$.
