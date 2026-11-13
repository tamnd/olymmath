---
tag: MQ50DJZDT9
kind: problem
appearances:
  - at: bmt/2021/ge5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2021 official paper
    url: https://berkeley.mt/archives/bmt-2021/general-problems.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 BMT
    url: https://artofproblemsolving.com/community/c6h3164374
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Bill divides a $28 \times 30$ rectangular board into two smaller rectangular boards with a single straightcut, so that the side lengths of both boards are positive whole numbers. How many different pairs of rectangular boards, up to congruence and arrangement, can Bill possibly obtain? (For instance, a cut that is $1$ unit away from either of the edges with length $28$ will result in the same pair of boards: either way, one would end up with a $1 \times 28$ board and a $29 \times 28$ board.)
