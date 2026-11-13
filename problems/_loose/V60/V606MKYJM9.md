---
tag: V606MKYJM9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h50156
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44282
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240555
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2005
    source: hf-ai-mo-aops
    label: 2005 Iran MO (3rd Round)
---
Let $a,b,c\in \mathbb N$ be such that $a,b\neq c$ . Prove that there are infinitely many prime numbers $p$ for which there exists $n\in\mathbb N$ that $p|a^n+b^n-c^n$ .
