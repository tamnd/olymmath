---
tag: B5MCF4TC53
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Rioplatense Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3456451
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2070
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2024
    source: hf-ai-mo-aops
    label: 2024 Rioplatense Mathematical Olympiad
---
In Tigre there are $2024$ islands, some of them connected by a two-way bridge. It is known that it is possible to go from any island to any other island using only the bridges (possibly several of them). In $k$ of the islands there is a flag ( $0 \le k \le 2024$ ). Ana wants to destroy some of the bridges in such a way that after doing so, the following two conditions are met: $\bullet$ If an island has a flag, it is connected to an odd number of islands. $\bullet$ If an island does not have a flag, it is connected to an even number of islands.
Determine all values of $k$ for which Ana can always achieve her objective, no matter what the initial bridge configuration is and which islands have a flag.
