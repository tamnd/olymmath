---
tag: 7WCJCZ767K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Vietnam Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2167632
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19672
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221198
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-tst/2020
    source: hf-ai-mo-aops
    label: 2020 Vietnam Team Selection Test
---
Suppose $n$ is a positive integer, $4n$ teams participate in a football tournament. In each round of the game, we will divide the $4n$ teams into $2n$ pairs, and each pairs play the game at the same time. After the tournament, it is known that every two teams have played at most one game. Find the smallest positive integer $a$ , so that we can arrange a schedule satisfying the above conditions, and if we take one more round, there is always a pair of teams who have played in the game.
