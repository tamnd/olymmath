---
tag: YPJJDS8HZ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=11
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian National Mathematical Olympiad
---
Let $A, B \subseteq \{0, 1, \dots, 2016\}$ be subsets with $|A| = 30$ and $|B| = 31$ elements. Show that there is an integer $n$ such that the set
$$
\{a + nb \pmod{2017} \mid a \in A, b \in B\}
$$
of residues has at least 730 elements.
