---
tag: D5N2K3VXET
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h1673748
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32888
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2015
    source: hf-ai-mo-aops
    label: 2015 Olympic Revenge
---
Given a triangle $A_1 A_2 A_3$ , let $a_i$ denote the side opposite to $A_i$ , where indices are taken modulo 3. Let $D_1 \in a_1$ . For $D_i \in A_i$ , let $\omega_i$ be the incircle of the triangle formed by lines $a_i, a_{i+1}, A_iD_i$ , and $D_{i+1} \in a_{i+1}$ with $A_{i+1} D_{i+1}$ tangent to $\omega_i$ . Show that the set $\{D_i: i \in \mathbb{N}\}$ is finite.
