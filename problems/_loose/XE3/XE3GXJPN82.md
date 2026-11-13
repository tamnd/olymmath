---
tag: XE3GXJPN82
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1983 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1898811
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27898
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1983 Tournament Of Towns
---
In Shvambrania there are $N$ towns, every two of which are connected by a road. These roads do not intersect. If necessary, some of them pass over or under others via bridges. An evil magician establishes one-way rules along the roads in such a way that if someone goes out of a certain town he is unable to come back. Prove that

(a) It is possible to establish such rules.
(b) There exists a town from which it is possible to reach any other town, and there exists a town from which it is not possible to go out.
(c) There is one and only one route passing through all towns.
(d) The magician can realise his intention in $N!$ ways.

(LM Koganov, Moscow)

PS. (a),(b),(c) for Juniors, (a),(b),(d) for Seniors
