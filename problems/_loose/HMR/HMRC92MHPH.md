---
tag: HMRC92MHPH
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235778
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a school tennis tournament with $ m \ge 2$ participants, each match consists of 4 sets. A player who wins more than half of all sets during a match gets 2 points for this match. A player who wins exactly half of all sets during the match gets 1 point, and a player who wins less than half of all sets gets 0 points. During the tournament, each participant plays exactly one match against each remaining player. Find the least number of participants m for which it is possible that some participant wins more sets than any other participant but obtains less points than any other participant.
