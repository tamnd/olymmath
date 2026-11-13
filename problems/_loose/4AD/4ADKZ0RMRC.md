---
tag: 4ADKZ0RMRC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h1278419
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14835
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216619
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2016
    source: hf-ai-mo-aops
    label: 2016 Taiwan TST Round 3
---
You are responsible for arranging a banquet for an agency. In the agency, some pairs of agents are enemies. A group of agents are called *avengers*, if and only if the number of agents in the group is odd and at least $3$ , and it is possible to arrange all of them around a round table so that every two neighbors are enemies.
You figure out a way to assign all agents to $11$ tables so that any two agents on the same tables are not enemies, and that's the minimum number of tables you can get. Prove that there are at least $2^{10}-11$ avengers in the agency.

This problem is adapted from 2015 IMO Shortlist C7.
