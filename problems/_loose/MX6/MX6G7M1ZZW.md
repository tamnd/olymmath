---
tag: MX6G7M1ZZW
kind: problem
type: answer
answer: "3628800"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261621
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For two base-10 positive integers $a$ and $b$, we say $a \sim b$ if we can rearrange the digits of $a$ in some way to obtain $b$, where the leading digit of both $a$ and $b$ is nonzero. For instance, $463 \sim 463$ and $634 \sim 463$. Find the number of $11$-digit positive integers $K$ such that $K$ is divisible by $2$, $3$, and $5$, and there is some positive integer $K'$ such that $K' \sim K$ and $K'$ is divisible by $7$, $11$, $13$, $17$, $101$, and $9901$.
