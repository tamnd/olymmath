---
tag: MWJ05MR7NN
kind: problem
type: answer
answer: \frac{n-1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95805
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer, $a$ be a positive integer coprime with $n$, and $b$ be any integer. Prove:
$$
\left\{\frac{b}{n}\right\}+\left\{\frac{a+b}{n}\right\}+\left\{\frac{2 a+b}{n}\right\}+\cdots+\left\{\frac{(n-1) a+b}{n}\right\}=\frac{n-1}{2}
$$
