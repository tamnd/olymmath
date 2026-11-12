---
tag: X287KTW1CS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11080
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2007
    source: hf-numina-olympiads
    label: JBMO-SL
---
Let $n>1$ be a positive integer and $p$ a prime number such that $n \mid(p-1)$ and $p \mid\left(n^{6}-1\right)$. Prove that at least one of the numbers $p-n$ and $p+n$ is a perfect square.
