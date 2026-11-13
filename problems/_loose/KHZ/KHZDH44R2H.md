---
tag: KHZDH44R2H
kind: problem
type: answer
answer: binom(|A|,|B|) * |B|^{|A|-|B|}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania THE 68th ROMANIAN MATHEMATICAL OLYMPIAD
---
Let $A$ and $B$ be two finite sets. Find the number of functions $f : A \to A$ satisfying the property that there exist two functions $g : A \to B$ and $h : B \to A$ such that $g(h(x)) = x$, $\forall x \in B$, and $h(g(x)) = f(x)$, $\forall x \in A$.
