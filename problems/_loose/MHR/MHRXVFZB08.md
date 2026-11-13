---
tag: MHRXVFZB08
kind: problem
type: answer
answer: (p-1)! + p \pmod{p^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be an odd prime number. Prove that
$$1^{p-1} + 2^{p-1} +...+ (p-1)^{p-1} \equiv p + (p-1)! \mod p^2$$
