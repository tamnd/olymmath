---
tag: 3Y5T9JTZ8G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Miklos Schweitzer
    url: https://artofproblemsolving.com/community/c6h3456401
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/2024
    source: hf-ai-mo-aops
    label: 2024 Miklos Schweitzer
---
Let $G = (S, T; E)$ be a finite bipartite graph with a perfect matching. Prove that there exists an injective edge weighting $w: E \to \mathbb{R}$ satisfying the following:
1. If $e_s$ is the edge with the smallest weight among the edges incident to $s$ for all $s \in S$ , then $\{ e_s \mid s \in S \}$ forms a perfect matching in $G$ .
2. If $e_t$ is the edge with the largest weight among the edges incident to $t$ for all $t \in T$ , then $\{ e_t \mid t \in T \}$ forms a perfect matching in $G$ .
