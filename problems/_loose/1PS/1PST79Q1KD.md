---
tag: 1PST79Q1KD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1541553
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78600
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267447
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2017
    source: hf-ai-mo-aops
    label: 2017 Online Math Open Problems
---
For a graph $G$ on $n$ vertices, let $P_G(x)$ be the unique polynomial of degree at most $n$ such that for each $i=0,1,2,\dots,n$ , $P_G (i)$ equals the number of ways to color the vertices of the graph $G$ with $i$ distinct colors such that no two vertices connected by an edge have the same color. For each integer $3\le k \le 2017$ , define a $k$ -*tasty* graph to be a connected graph on $2017$ vertices with $2017$ edges and a cycle of length $k$ . Let the *tastiness* of a $k$ -tasty graph $G$ be the number of coefficients in $P_G(x)$ that are odd integers, and let $t$ be the minimal tastiness over all $k$ -tasty graphs with $3\le k \le 2017$ . Determine the sum of all integers $b$ between $3$ and $2017$ inclusive for which there exists a $b$ -tasty graph with tastiness $t$ .

*Proposed by Vincent Huang*
