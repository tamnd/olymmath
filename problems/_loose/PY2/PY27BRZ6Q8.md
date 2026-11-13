---
tag: PY27BRZ6Q8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h3228592
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2309
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268173
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2024
    source: hf-ai-mo-aops
    label: 2024 Vietnam National Olympiad
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnamese MO
---
For each positive integer $n$ , let $\tau (n)$ be the number of positive divisors of $n$ .

a) Find all positive integers $n$ such that $\tau(n)+2023=n$ .
b) Prove that there exist infinitely many positive integers $k$ such that there are exactly two positive integers $n$ satisfying $\tau(kn)+2023=n$ .
