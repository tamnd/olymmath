---
tag: PY7JJ10A8N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250807
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=389
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
Let $P \in Q[x]$ be a polynomial of degree $2016$ whose leading coefficient is $1$. A positive integer $m$ is *nice * if there exists some positive integer $n$ such that $m = n^3 + 3n + 1$. Suppose that there exist infinitely many positive integers $n$ such that $P(n)$ are nice. Prove that there exists an arithmetic sequence $(n_k)$ of arbitrary length such that $P(n_k)$ are all nice for $k = 1,2, 3$,
