---
tag: 1PB56K1FSA
kind: problem
type: answer
answer: "183"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221468
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There exist complex numbers $z_1,z_2,\dots,z_{10}$ which satisfy$$|z_ki^k+ z_{k+1}i^{k+1}| = |z_{k+1}i^k+ z_ki^{k+1}|$$for all integers $1 \leq k \leq 9$, where $i = \sqrt{-1}$. If $|z_1|=9$, $|z_2|=29$, and for all integers $3 \leq n \leq 10$, $|z_n|=|z_{n-1} + z_{n-2}|$, find the minimum value of $|z_1|+|z_2|+\cdots+|z_{10}|$.

*Proposed by DeToasty3*
