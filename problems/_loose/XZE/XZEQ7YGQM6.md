---
tag: XZEQ7YGQM6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250676
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Let $300$ students participate to the Olympiad. Between each $3$ participants there is a pair that are not friends. Hamza enumerates participants in some order and denotes by $x_i$ the number of friends of $i$-th participant. It occurs that $\{x_1,x_2,...,x_{299},x_{300}\} = \{1, 2,..., N - 1,N\}$ Find the biggest possible value for $N$.
