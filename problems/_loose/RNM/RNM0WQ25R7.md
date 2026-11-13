---
tag: RNM0WQ25R7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2525414
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48623
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Mongolian Mathematical Olympiad
---
In a tennis tournament, any two of the $n$ participants played a match (the winner of a match gets $1$ point, the loser gets $0$ ). The scores after the tournament were $r_1\le r_2\le\ldots\le r_n$ . A match between two players is called wrong if after it the winner has a score less than or equal to that of the loser. Consider the set $I=\{i|r_1\ge i\}$ . Prove that the number of wrong matches is not less than $\sum_{i\in I}(r_i-i+1)$ , and show that this value is realizable
