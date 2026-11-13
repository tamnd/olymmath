---
tag: J8B4WBNMCY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h611775
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11687
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213644
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
Kevin has a set $S$ of $2014$ points scattered on an infinitely large planar gameboard. Because he is bored, he asks Ashley to evaluate $$ x = 4f_4 + 6f_6 + 8f_8 + 10f_{10} + \cdots $$ while he evaluates $$ y = 3f_3 + 5f_5+7f_7+9f_9 + \cdots, $$ where $f_k$ denotes the number of convex $k$ -gons whose vertices lie in $S$ but none of whose interior points lie in $S$ .

However, since Kevin wishes to one-up everything that Ashley does, he secretly positions the points so that $y-x$ is as large as possible, but in order to avoid suspicion, he makes sure no three points lie on a single line. Find $\left\lvert y-x \right\rvert$ .

*Proposed by Robin Park*
