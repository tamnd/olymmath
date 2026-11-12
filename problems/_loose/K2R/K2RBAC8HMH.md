---
tag: K2RBAC8HMH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h2522661
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Taiwan TST Round 2
---
Let $k\leq n$ be two positive integers. IMO-nation has $n$ villages, some of which are connected by a road. For any two villages, the distance between them is the minimum number of toads that one needs to travel from one of the villages to the other, if the traveling is impossible, then the distance is set as infinite.

Alice, who just arrived IMO-nation, is doing her quarantine in some place, so she does not know the configuration of roads, but she knows $n$ and $k$ . She wants to know whether the furthest two villages have finite distance. To do so, for every phone call she dials to the IMO office, she can choose two villages, and ask the office whether the distance between them is larger than, equal to, or smaller than $k$ . The office answers faithfully (infinite distance is larger than $k$ ). Prove that Alice can know whether the furthest two villages have finite distance between them in at most $2n^2/k$ calls.

*Proposed by usjl and Cheng-Ying Chang*
