---
tag: 7F0V1TTZB2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 SMO
    url: https://artofproblemsolving.com/community/c6h2251628
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19439
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220980
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2020
    source: hf-ai-mo-aops
    label: 2020 SMO
---
Let $\triangle ABC$ be an acute scalene triangle with incenter $I$ and incircle $\omega$ . Two points $X$ and $Y$ are chosen on minor arcs $AB$ and $AC$ , respectively, of the circumcircle of triangle $\triangle ABC$ such that $XY$ is tangent to $\omega$ at $P$ and $\overline{XY}\perp \overline{AI}$ . Let $\omega$ be tangent to sides $AC$ and $AB$ at $E$ and $F$ , respectively. Denote the intersection of lines $XF$ and $YE$ as $T$ .

Prove that if the circumcircles of triangles $\triangle TEF$ and $\triangle ABC$ are tangent at some point $Q$ , then lines $PQ$ , $XE$ , and $YF$ are concurrent.

*Proposed by Andrew Wen*
