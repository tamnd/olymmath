---
tag: CYKWXS92V8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205139
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest integer $n$ greater than or equal to $10$ that satisfies the following equation:
$$\left\lfloor \frac{n}{1} \right\rfloor \left\lfloor \frac{n}{2} \right\rfloor\cdots \left\lfloor \frac{n}{10} \right\rfloor=\binom{n}{10}$$
