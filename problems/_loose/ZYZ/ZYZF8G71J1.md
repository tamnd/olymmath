---
tag: ZYZF8G71J1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1975 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h367918
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25189
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225935
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1975
    source: hf-ai-mo-aops
    label: 1975 IMO Shortlist
---
Let $A_0,A_1, \ldots , A_n$ be points in a plane such that
(i) $A_0A_1 \leq \frac{1}{ 2} A_1A_2 \leq \cdots \leq \frac{1}{2^{n-1} } A_{n-1}A_n$ and
(ii) $0 < \measuredangle A_0A_1A_2 < \measuredangle A_1A_2A_3 < \cdots < \measuredangle A_{n-2}A_{n-1}A_n < 180^\circ,$ where all these angles have the same orientation. Prove that the segments $A_kA_{k+1},A_mA_{m+1}$ do not intersect for each $k$ and $n$ such that $0 \leq k \leq m - 2 < n- 2.$
