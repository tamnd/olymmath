---
tag: 8S5JEBVR5V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Cuba MO
    url: https://artofproblemsolving.com/community/c6h3403636
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37508
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cu-mo/2013
    source: hf-ai-mo-aops
    label: 2013 Cuba MO
  - at: sa-samc/2012
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions 2012
---
A subset of the set $\{1, 2, 3, ..., 30\}$ is called *delicious [/i ]if it doesn't contain elements a and b such that $a = 3b$ . A *delicious* subset It is called *super delicious* if, in addition to being delicious, it is verified that no *delicious* subset has more elements than it has. Determine the number of *super delicious* subsets
