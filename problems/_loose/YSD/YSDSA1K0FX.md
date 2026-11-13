---
tag: YSDSA1K0FX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
${ }^{+}$ Prove that a graph $G=(V, E)$ contains a $k$-flow if and only if it has an orientation $D$, such that for every $X \subseteq V$, the orientation has at least $1 / k$ of the edges in $E(X, \bar{X})$ directed from $X$ to $\bar{X}$.
