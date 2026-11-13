---
tag: CKRD34FH9C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=40
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
For a function $f : \mathcal{P}(\mathbb{N}) \to \mathbb{N}$ and a subset $A \subseteq \mathbb{N}$, we say $f$ is *A-predictor* if the set $\{x \in \mathbb{N} \mid x \notin A, f(A \cup \{x\}) \neq x\}$ is finite. Prove that there exists a function that for every subset $A$ of natural numbers is *A-predictor*.
