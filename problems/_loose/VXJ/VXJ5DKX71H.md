---
tag: VXJ5DKX71H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h520367
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6516
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4127
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151297
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-ai-mo-aops
    label: 2011 Harvard-MIT Mathematics Tournament
  - at: hmmt/2011
    source: hf-numina-olympiads
    label: HMMT February
  - at: hmmt
    source: hf-mathnet
    label: United States Harvard-MIT Mathematics Tournament
---
Let $\omega_1$ and $\omega_2$ be two circles that intersect at points $A$ and $B$ . Let line $l$ be tangent to $\omega_1$ at $P$ and to $\omega_2$ at $Q$ such that $A$ is closer to $PQ$ than $B$ . Let points $R$ and $S$ lie along rays $PA$ and $QA$ , respectively, so that $PQ = AR = AS$ and $R$ and $S$ are on opposite sides of $A$ as $P$ and $Q$ . Let $O$ be the circumcenter of triangle $ASR$ , and $C$ and $D$ be the midpoints of major arcs $AP$ and $AQ$ , respectively. If $\angle APQ$ is $45$ degrees and $\angle AQP$ is $30$ degrees, determine $\angle COD$ in degrees.
