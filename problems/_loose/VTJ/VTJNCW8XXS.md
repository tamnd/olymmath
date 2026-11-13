---
tag: VTJNCW8XXS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h364146
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4751
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206918
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=346
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2010
    source: hf-ai-mo-aops
    label: 2010 China Team Selection Test
  - at: cn-tst
    source: hf-mathnet
    label: China China National Team Selection Test
---
Let $G=G(V,E)$ be a simple graph with vertex set $V$ and edge set $E$ . Suppose $|V|=n$ . A map $f: V\rightarrow\mathbb{Z}$ is called good, if $f$ satisfies the followings:
(1) $\sum_{v\in V} f(v)=|E|$ ;
(2) color arbitarily some vertices into red, one can always find a red vertex $v$ such that $f(v)$ is no more than the number of uncolored vertices adjacent to $v$ .
Let $m(G)$ be the number of good maps. Prove that if every vertex in $G$ is adjacent to at least one another vertex, then $n\leq m(G)\leq n!$ .
