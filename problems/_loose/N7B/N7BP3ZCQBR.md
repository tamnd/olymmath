---
tag: N7BP3ZCQBR
kind: problem
type: answer
answer: \frac{p+1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p \ge 3$ be a prime. For $j = 1,2 ,... ,p - 1$, let $r_j$ be the remainder when the integer $\frac{j^{p-1}-1}{p}$ is divided by $p$.
Prove that $$r_1 + 2r_2 + ... + (p - 1)r_{p-1} \equiv \frac{p+1}{2} (\mod p)$$
