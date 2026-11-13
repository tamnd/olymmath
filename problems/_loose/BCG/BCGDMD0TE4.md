---
tag: BCGDMD0TE4
kind: problem
type: answer
answer: The finite field with four elements (F4).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th NMO
---
Determine the finite commutative rings $A$ with at least four elements, with the property that for any choice of a proper subset $S$ of $A^*$ with at least two elements, the equality
$$
\sum_{x \in S} x = \prod_{x \in A^* \setminus S} x
$$
holds.
