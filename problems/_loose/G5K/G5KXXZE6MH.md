---
tag: G5KXXZE6MH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253214
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every non-negative integer n, define an n-variable function K_n (x_1,x_2,…,x_n ) as follows:
K_0=1
K_1 (x_1 )=〖x_1〗^2
K_(n+2) (x_1,x_2,…,x_(n+2) )=〖x_(n+2)〗^2.K_(n+1) (x_1,x_2,…,x_(n+1) )+(x_(n+2)+x_(n+1))K_n (x_1,x_2,…,x_n )
Prove that:
K_n (x_1,x_2,…,x_n )=K_n (x_n,…〖,x〗_2,x_1 )
