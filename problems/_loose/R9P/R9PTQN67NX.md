---
tag: R9PTQN67NX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214652
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The vertices of a regular $n$-gon are initially marked with one of the signs $+$ or $-$ . A *move* consists in choosing three consecutive vertices and changing the signs from the vertices , from $+$ to $-$ and from $-$ to $+$.

**a)** Prove that if $n=2015$ then for any initial configuration of signs , there exists a sequence of *moves* such that we'll arrive at a configuration with only $+$ signs.
**b)** Prove that if $n=2016$ , then there exists an initial configuration of signs such that no matter how we make the *moves* we'll never arrive at a configuration with only $+$ signs.
