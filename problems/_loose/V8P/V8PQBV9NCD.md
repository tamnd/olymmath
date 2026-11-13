---
tag: V8PQBV9NCD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211802
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Let $a_1$, $a_2$, $\ldots\,$, $a_n$ be real numbers such that $-1 \le a_i \le 1$ (for all $1 \le i \le n$). Let $b_1$, $b_2$, $\ldots$, $b_n$ be real numbers such that $-1 \le b_i \le 1$ (for all $1 \le i \le n$). Prove that
$$
\left| \prod_{i=1}^n a_i - \prod_{i=1}^n b_i \right|
\le \sum_{i = 1}^n \left| a_i - b_i \right| .
$$
