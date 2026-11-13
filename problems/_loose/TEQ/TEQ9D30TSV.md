---
tag: TEQ9D30TSV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Bulgarian Winter Tournament
    url: https://artofproblemsolving.com/community/c6h3244043
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1550
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205060
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=211
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-winter/2024
    source: hf-ai-mo-aops
    label: 2024 Bulgarian Winter Tournament
  - at: bg-winter
    source: hf-mathnet
    label: Bulgaria 2 Bulgarian Winter Tournament
---
Let $n$ be a positive integer and let $\mathcal{A}$ be a family of non-empty subsets of $\{1, 2, \ldots, n \}$ such that if $A \in \mathcal{A}$ and $A$ is subset of a set $B\subseteq \{1, 2, \ldots, n\}$ , then $B$ is also in $\mathcal{A}$ . Show that the function $$ f(x):=\sum_{A \in \mathcal{A}} x^{|A|}(1-x)^{n-|A|} $$ is strictly increasing for $x \in (0,1)$ .
