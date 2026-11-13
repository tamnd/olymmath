---
tag: 484YNNGDPF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 USA Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1065569
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13291
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: us-tst/2015
    source: hf-ai-mo-aops
    label: 2015 USA Team Selection Test
---
A tournament is a directed graph for which every (unordered) pair of vertices has a single directed edge from one vertex to the other. Let us define a proper directed-edge-coloring to be an assignment of a color to every (directed) edge, so that for every pair of directed edges $\overrightarrow{uv}$ and $\overrightarrow{vw}$ , those two edges are in different colors. Note that it is permissible for $\overrightarrow{uv}$ and $\overrightarrow{uw}$ to be the same color. The directed-edge-chromatic-number of a tournament is defined to be the minimum total number of colors that can be used in order to create a proper directed-edge-coloring. For each $n$ , determine the minimum directed-edge-chromatic-number over all tournaments on $n$ vertices.

*Proposed by Po-Shen Loh*
