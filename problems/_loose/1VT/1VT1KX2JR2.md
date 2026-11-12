---
tag: 1VT1KX2JR2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077914
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78519
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Alex starts with a rooted tree with one vertex (the root). For a vertex $v$ , let the size of the subtree of $v$ be $S(v)$ . Alex plays a game that lasts nine turns. At each turn, he randomly selects a vertex in the tree, and adds a child vertex to that vertex. After nine turns, he has ten total vertices. Alex selects one of these vertices at random (call the vertex $v_1$ ). The expected value of $S(v_1)$ is of the form $\tfrac{m}{n}$ for relatively prime positive integers $m, n$ . Find $m+n$ .**Note:** In a rooted tree, the subtree of $v$ consists of its indirect or direct descendants (including $v$ itself).

*Proposed by Yang Liu*
