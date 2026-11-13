---
tag: AMKD0B8V8Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751571
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69836
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260772
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2014
    source: hf-ai-mo-aops
    label: 2014 BMT Spring
---
Given an integer $n\ge2$ , the graph $G$ is defined by:

- Vertices of $G$ are represented by binary strings of length $n$ - Two vertices $a,b$ are connected by an edge if and only if they differ in exactly $2$ places

Let $S$ be a subset of the vertices of $G$ , and let $S'$ be the set of edges between vertices in $S$ and vertices not in $S$ . Show that if $|S|$ (the size of $S$ ) $\le2^{n-2}$ , then $|S'|\ge|S|$ .
