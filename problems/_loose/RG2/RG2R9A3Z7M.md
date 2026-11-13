---
tag: RG2R9A3Z7M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1983 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2966355
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39300
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236600
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1983
    source: hf-ai-mo-aops
    label: 1983 Bundeswettbewerb Mathematik
---
Two people $A$ and $B$ play the following game: They take from $\{0, 1, 2, 3,..., 1024\}$ alternately $512$ , $256$ , $128$ , $64$ , $32$ , $16$ , $8$ , $4$ , $2$ , $1$ , numbers away where $A$ first removes $512$ numbers, $B$ removes $256$ numbers etc. Two numbers $a, b$ remain ( $a < b$ ). $B$ pays $A$ the amount $b - a$ . $A$ would like to win as much as possible, $B$ would like to lose as little as possible. What profit does $A$ make if does every player play optimally according to their goals? The result must be justified.
