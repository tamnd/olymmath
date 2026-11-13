---
tag: S2FPB9KVT1
kind: problem
type: answer
answer: "128"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215206
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Several players try out for the USAMTS basketball team, and they all have integer heights and weights when measured in centimeters and pounds, respectively. In addition, they all weigh less in pounds than they are tall in centimeters. All of the players weigh at least $190$ pounds and are at most $197$ centimeters tall, and there is exactly one player with
every possible height-weight combination.

The USAMTS wants to field a competitive team, so there are some strict requirements.

- If person $P$ is on the team, then anyone who is at least as tall and at most as heavy as $P$ must also be on the team.

- If person $P$ is on the team, then no one whose weight is the same as $P$'s height can also be on the team.

Assuming the USAMTS team can have any number of members (including zero), how many different basketball teams can be constructed?
