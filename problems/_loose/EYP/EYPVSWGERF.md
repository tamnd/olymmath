---
tag: EYPVSWGERF
kind: problem
type: answer
answer: n \ge 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $n$ such that for all real numbers $x_1,x_2,\ldots ,x_n,y_1,y_2,\ldots ,y_n$ the following inequality holds:
$$ x_1x_2\ldots x_n+y_1y_2\ldots y_n\le\sqrt{x_1^2+y_1^2}\cdot\sqrt{x_2^2+y_2^2}\cdot \cdots \sqrt{x_n^2+y_n^2}\cdot $$
