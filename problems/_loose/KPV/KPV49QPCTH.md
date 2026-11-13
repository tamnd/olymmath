---
tag: KPV49QPCTH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4105
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-numina-olympiads
    label: HMMT February
---
Let $n$ be an odd positive integer, and suppose that $n$ people sit on a committee that is in the process of electing a president. The members sit in a circle, and every member votes for the person either to his/her immediate left, or to his/her immediate right. If one member wins more votes than all the other members do, he/she will be declared to be the president; otherwise, one of the the members who won at least as many votes as all the other members did will be randomly selected to be the president. If Hermia and Lysander are two members of the committee, with Hermia sitting to Lysander's left and Lysander planning to vote for Hermia, determine the probability that Hermia is elected president, assuming that the other $n-1$ members vote randomly.
