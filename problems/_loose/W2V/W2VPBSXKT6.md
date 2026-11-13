---
tag: W2VPBSXKT6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38397
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35713
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1998
    source: hf-ai-mo-aops
    label: 1998 China Team Selection Test
---
$n \geq 5$ football teams participate in a round-robin tournament. For every game played, the winner receives 3 points, the loser receives 0 points, and in the event of a draw, both teams receive 1 point. The third-from-bottom team has fewer points than all the teams ranked before it, and more points than the last 2 teams; it won more games than all the teams before it, but fewer games than the 2 teams behind it. Find the smallest possible $n$ .
