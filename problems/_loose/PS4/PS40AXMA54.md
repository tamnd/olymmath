---
tag: PS40AXMA54
kind: problem
type: answer
answer: "120"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91752
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integers $m, n$, define $r(m, n)$ as the remainder of $m \div n$ (for example, $r(8,3)$ represents the remainder of $8 \div 3$, so $r(8,3)=2$). The smallest positive integer solution that satisfies the equation $r(m, 1)+r(m, 2)+r(m, 3)+\cdots+r(m, 10)=4$ is $ $.
