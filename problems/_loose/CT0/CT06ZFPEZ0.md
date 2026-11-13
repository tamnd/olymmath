---
tag: CT06ZFPEZ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2964366
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39364
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236664
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1992
    source: hf-ai-mo-aops
    label: 1992 Bundeswettbewerb Mathematik
---
There are two bowls on the table, in one there are $p$ , in the other $q$ stones ( $p, q \in N*$ ). Two players $A$ and $B$ take turns playing, starting with $A$ .
Who's turn: $\bullet$ takes a stone from one of the bowls $\bullet$ or removes one stone from each bowl $\bullet$ or puts a stone from one of the bowls into the other.
Whoever takes the last stone wins.
Under what conditions can $A$ and under what conditions can $B$ force the win?
The answer must be justified.
