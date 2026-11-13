---
tag: AVK0MSR2T0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 IMAC Arhimede
    url: https://artofproblemsolving.com/community/c6h1834764
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11198
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213145
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imac/2014
    source: hf-ai-mo-aops
    label: 2014 IMAC Arhimede
  - at: imac
    source: hf-mathnet
    label: Spain International Mathematical Arhimede Contest
---
Let $p$ be a prime number. The natural numbers $m$ and $n$ are written in the system with the base $p$ as $n = a_0 + a_1p +...+ a_kp^k$ and $m = b_0 + b_1p +..+ b_kp^k$ . Prove that $$ {n \choose m} \equiv \prod_{i=0}^{k}{a_i \choose b_i} (mod p) $$
